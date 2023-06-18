import React, { useEffect, useState } from 'react'
import { TabView, TabBarProps, Route } from 'react-native-tab-view'

import { getHourlyGenerationData } from '../../services/getHourlyGenerationData'
import { getMonthlyGenerationData } from '../../services/getMonthlyGenerationData'
import { getDailyGenerationData } from '../../services/getDailyGenerationData'
import { getYearlyGenerationData } from '../../services/getYearlyGenerationData'

import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { Information } from './components/Information'
import { GradientBackground } from '../../components/GradientBackground'

import { HeaderContainer, Menu, MenuItem, MenuText, Title, TitleContainer } from './styles'
import { Alert } from 'react-native'


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

export function Statistics() {
  const [hourlyGeneration, setHourlyGeneration] = useState<IGeneration>({} as IGeneration)
  const [dailyGeneration, setDailyGeneration] = useState<IGeneration>({} as IGeneration)
  const [monthlyGeneration, setMonthlyGeneration] = useState<IGeneration>({} as IGeneration)
  const [yearlyGeneration, setYearlyGeneration] = useState<IGeneration>({} as IGeneration)
  const [isLoading, setIsLoading] = useState(false)

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'hourly', title: 'Por Hora', indexKey: 0 },
    { key: 'daily', title: 'Diário', indexKey: 1 },
    { key: 'monthly', title: 'Mensal', indexKey: 2 },
    { key: 'yearly', title: 'Anual', indexKey: 3 },
  ])

  useEffect(() => {
    getGenerationData()
  }, [])

  async function getGenerationData() {
    setIsLoading(true)

    const dataHourlyResponse = await getHourlyGenerationData()
    const dataDailyResponse = await getDailyGenerationData()
    const dataMonthlyResponse = await getMonthlyGenerationData()
    const dataYearlyResponse = await getYearlyGenerationData()

    if (
      dataHourlyResponse?.status !== 200 || 
      dataDailyResponse?.status !== 200 || 
      dataMonthlyResponse?.status !== 200 || 
      dataYearlyResponse?.status !== 200 
    ) {
      Alert.alert('Erro', 'Houve um erro ao obter os dados')
      return setIsLoading(false)
    }
    
    setHourlyGeneration(dataHourlyResponse.data)
    setDailyGeneration(dataDailyResponse.data)
    setMonthlyGeneration(dataMonthlyResponse.data)
    setYearlyGeneration(dataYearlyResponse.data)
    
    setIsLoading(false)
  }

  function renderTabBar(props: TabBarProps<Route>) {
    return (
      <Menu>
        {props.navigationState.routes.map((route, i) => {
          let isActive = false

          if (index === i) {
            isActive = true
          }

          return (
            <MenuItem key={route.key} isActive={isActive} onPress={() => setIndex(i)}>
              <MenuText isActive={isActive}>{route.title}</MenuText>
            </MenuItem>
          )
        })}
      </Menu>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderScene = ({ route }: any) => {
    if (route.key === 'hourly' && index == 0) {
      return (
        <Information
          key='hourly'
          expected={hourlyGeneration?.expected}
          generation={hourlyGeneration?.generation}
          totals={hourlyGeneration?.totals}
          x_labels={hourlyGeneration?.x_labels}
          xLabel='Hora'
          yLabel='Energia Gerada'
        />
      )
    }

    if (route.key === 'daily' && index === 1) {
      return (
        <Information
          key='daily'
          expected={dailyGeneration.expected}
          generation={dailyGeneration.generation}
          totals={dailyGeneration.totals}
          x_labels={dailyGeneration.x_labels}
          xLabel='Data'
          yLabel='Energia Gerada'
        />
      )
    }

    if (route.key === 'monthly' && index === 2) {
      return (
        <Information
          key='monthly'
          expected={monthlyGeneration.expected}
          generation={monthlyGeneration.generation}
          totals={monthlyGeneration.totals}
          x_labels={monthlyGeneration.x_labels}
          xLabel='Data'
          yLabel='Energia Gerada'
        />
      )
    }

    if (route.key === 'yearly' && index === 3) {
      return (
        <Information
          key='yearly'
          expected={yearlyGeneration.expected}
          generation={yearlyGeneration.generation}
          totals={yearlyGeneration.totals}
          x_labels={yearlyGeneration.x_labels}
          xLabel='Data'
          yLabel='Energia Gerada'
        />
      )
    }
  }

  if (isLoading) {
    return (
      <GradientBackground alignContent='center'>
        <Loading size='large' />
      </GradientBackground>
    )
  }

  return (
    <GradientBackground>

      <TitleContainer>
        <Title>Estatísticas</Title>

        <HeaderContainer>
          <Header onPress={getGenerationData} />
        </HeaderContainer>
      </TitleContainer>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => renderTabBar(props)}
      />

    </GradientBackground>
  )
}