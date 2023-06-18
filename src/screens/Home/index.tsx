import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import {
  BatteryCharging, 
  BatteryFull, 
  CheckCircle, 
  PresentationChart, 
  Sun, 
  TrendDown, 
  TrendUp, 
  XCircle
} from 'phosphor-react-native'

import { getDailyGenerationData } from '../../services/getDailyGenerationData'

import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { ItemBox } from '../../components/ItemBox'
import { GradientBackground } from '../../components/GradientBackground'

import dark from '../../themes/dark'
import Logo from '../../assets/yellot-footer.svg'
import { Container, ContainerBox, ContainerLogo, HeaderContainer } from './styles'


interface IGeneration {
  expected: number[],
  generation: number[],
  totals: {
    co2: number,
    kwh: number,
    percentage: number,
    trees: number,
  },
  x_labels: string[],
}

export function Home() {
  const [status, setStatus] = useState(false)
  const [generationExpected, setGenerationExpected] = useState(0)
  const [yesterdayGeneration, setYesterdayGeneration] = useState(0)
  const [todayGeneration, setTodayGeneration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect( () => {
    getGenerationData()
  }, [] )

  async function getGenerationData() {
    setIsLoading(true)

    const dataResponse = await getDailyGenerationData()

    if (dataResponse?.status !== 200) {
      Alert.alert('Erro', 'Houve um erro ao obter os dados')
      return setIsLoading(false)
    }

    const dailyGeneration: IGeneration = dataResponse?.data

    // For testing, the date was defined to be a date that has in the API data
    const todayDate = new Date('2023-05-11T23:00:00')
    
    // For production, use the code below
    // const todayDate = new Date()

    const todayDatePtBR = new Date(todayDate.setHours(todayDate.getHours() - 3))
    const todayDateFormatted = todayDate.toISOString().split('T')

    const indexOfTodayGeneration = dailyGeneration.x_labels.findIndex( 
      (element) => element == todayDateFormatted[0]
    )

    const yesterdayDate = new Date( todayDate.setDate(todayDatePtBR.getDate() - 1) )
    const yesterdayDateFormatted = yesterdayDate.toISOString().split('T')
    
    const indexOfYesterdayGeneration = dailyGeneration.x_labels.findIndex( 
      (element) => element == yesterdayDateFormatted[0]
    )

    if (indexOfYesterdayGeneration > 0) {
      setYesterdayGeneration(dailyGeneration.generation[indexOfYesterdayGeneration])
    } else {
      setYesterdayGeneration(0)
    }

    if (indexOfTodayGeneration > 0) {
      setStatus(true)
      setGenerationExpected(dailyGeneration.expected[indexOfTodayGeneration])
      setTodayGeneration(dailyGeneration.generation[indexOfTodayGeneration])
    } else {
      setStatus(false)
      setGenerationExpected(0)
      setTodayGeneration(0)
    }

    setIsLoading(false)
  }
  
  const compareGeneration = ( todayGeneration - yesterdayGeneration )

  if (isLoading) {
    return (
      <GradientBackground alignContent='center'>
        <Loading size='large' />
      </GradientBackground>
    )
  }
  
  return (
    <GradientBackground>

      <Container>

        <HeaderContainer>
          <Header onPress={getGenerationData} />
        </HeaderContainer>

        <ContainerLogo>
          <Logo height={50} />
        </ContainerLogo>

        <ContainerBox>

          <ItemBox
            title='Status'
            subtitle={status ? 'Gerando' : 'Inativo'}
            icon={status ? 
              <CheckCircle size={28} color={dark.COLORS.YELLOW_300}  />
              : 
              <XCircle size={28} color={dark.COLORS.YELLOW_300}  />
            }
            textSubtitleColor={status ? 'green' : 'red'}
          />

          <ItemBox
            title='Produção Esperada Hoje'
            subtitle={`${generationExpected} kWh`}
            icon={<Sun size={28} color={dark.COLORS.YELLOW_300}  />}
          />

          <ItemBox
            title='Energia Gerada Ontem'
            subtitle={`${yesterdayGeneration} kWh`}
            icon={<BatteryFull size={28} color={dark.COLORS.YELLOW_300}  />}
          />

          <ItemBox
            title='Energia Gerada Hoje'
            subtitle={`${todayGeneration} kWh`}
            icon={<BatteryCharging size={28} color={dark.COLORS.YELLOW_300}  />}
          />

          <ItemBox
            title='Comparativo'
            subtitle={ compareGeneration > 0 ?
              <TrendUp size={28} color={dark.COLORS.GREEN_300} /> :
              <TrendDown size={28} color={dark.COLORS.RED_300} />
            }
            icon={<PresentationChart size={28} color={dark.COLORS.YELLOW_300}  />}
          />

        </ContainerBox>

      </Container>

    </GradientBackground>
  )
}