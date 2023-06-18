import React from 'react'
import { CloudArrowDown, Lightning, Percent, Tree } from 'phosphor-react-native'

import { Chart } from '../../../../components/Chart'
import { ItemBox } from '../../../../components/ItemBox'
import { TableInformation } from '../../../../components/TableInformation'
import { GradientBackground } from '../../../../components/GradientBackground'

import dark from '../../../../themes/dark'
import { ChartContainer, Container, ContainerBox, TableContainer } from './styles'

import { dateValidate } from '../../../../utils/dateValidate'
import { timeValidate } from '../../../../utils/timeValidate'
import { convertDateFormat } from '../../../../utils/convertDateFormat'
import { removeSecondsFromTime } from '../../../../utils/removeSecondsFromTime'


interface InformationProps {
  expected: number[] | null,
  generation: number[] | null,
  totals: {
    co2: number,
    kwh: number,
    percentage: number,
    trees: number,
  } | null,
  x_labels: string[] | null,
  xLabel?: string,
  yLabel?: string,
}

export function Information({ expected, generation, totals, x_labels, xLabel, yLabel }: InformationProps) {

  const xValues = x_labels?.map((value) => {
    if (dateValidate(value)) {
      return convertDateFormat(value)
    }

    if (timeValidate(value)) {
      return removeSecondsFromTime(value)
    }

    return value
  }) as string[]

  return (
    <GradientBackground>

      <Container showsVerticalScrollIndicator={false}>

        <ContainerBox>

          <ItemBox
            title='Total de Energia Gerada'
            subtitle={totals?.kwh ? `${totals?.kwh} kwh` : '--'}
            icon={<Lightning size={28} color={dark.COLORS.YELLOW_300} />}
          />

          <ItemBox
            title='Porcentagem'
            subtitle={ totals?.percentage ? String(totals?.percentage) : '--'}
            graphPercentage={totals?.percentage}
            icon={<Percent size={28} color={dark.COLORS.YELLOW_300} />}
          />

          <ItemBox
            title='Redução de CO₂'
            subtitle={ totals?.co2 ? `${totals?.co2} kg` : '--'}
            icon={<CloudArrowDown size={28} color={dark.COLORS.YELLOW_300} />}
          />

          <ItemBox
            title='Árvores salvas'
            subtitle={ totals?.trees ? String(totals?.trees) : '--'}
            icon={<Tree size={28} color={dark.COLORS.YELLOW_300} />}
          />

        </ContainerBox>

        <ChartContainer>
          <Chart
            title='Geração de Energia x Tempo'
            xValues={xValues}
            y1Values={generation}
            y2Values={expected}
          />
        </ChartContainer>

        <TableContainer>
          <TableInformation
            title='Dados'
            xValues={xValues}
            yValues={generation}
            xLabel={xLabel ? xLabel : ''}
            yLabel={yLabel ? yLabel : ''}
            expected={expected}
          />
        </TableContainer>

      </Container>

    </GradientBackground>
  )
}