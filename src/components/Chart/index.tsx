import React from 'react'
import { LogBox } from 'react-native'
import { 
  VictoryAxis, 
  VictoryChart, 
  VictoryLegend, 
  VictoryLine, 
  VictoryTheme 
} from 'victory-native'

import dark from '../../themes/dark'
import { Container, Title } from './styles'


LogBox.ignoreLogs(['Require cycle: node_modules/victory',])

interface ChartProps {
  title: string,
  xValues: string[] | null,
  y1Values: number[] | null,
  y2Values: number[] | null,
}

export function Chart({ title, xValues, y1Values, y2Values }: ChartProps) {
  const graph1DataFormatted = []
  const graph2DataFormatted = []

  if (xValues && y1Values) {
    for ( let index = 0; index < xValues.length; index++ ) {
      graph1DataFormatted.push({ 
        x: xValues[index] ? xValues[index] : 0, 
        y: y1Values[index] ? y1Values[index] : 0, 
      })
    }
  }

  if (xValues && y2Values) {
    for ( let index = 0; index < xValues.length; index++ ) {
      graph2DataFormatted.push({ 
        x: xValues[index] ? xValues[index] : 0, 
        y: y2Values[index] ? y2Values[index] : 0, 
      })
    }
  }

  return (
    <Container>

      <Title> {title} </Title>
          
      <VictoryChart
        theme={VictoryTheme.material}
        padding={{bottom:100,right:50,left:50}}
        height={350}
      >

        <VictoryAxis
          style={{
            axis: { stroke: dark.COLORS.YELLOW_300 },
            grid: { stroke: dark.COLORS.YELLOW_300, opacity: 0.5 },
            tickLabels: { fontSize: 12, padding: 1, fill: dark.COLORS.YELLOW_300 }
          }} dependentAxis
        />

        <VictoryAxis
          fixLabelOverlap={true}
          style={{ 
            axis: { stroke: dark.COLORS.YELLOW_300 },
            grid: { stroke: dark.COLORS.YELLOW_300, opacity: 0.5 },
            tickLabels: { fontSize: 12, padding: 1, angle:50, verticalAnchor: 'middle', textAnchor:'start', fill: dark.COLORS.YELLOW_300 }
          }} />

        <VictoryLegend x={100} y={320}
          orientation="horizontal"
          gutter={20}
          style={{ 
            title: {fontSize: 20 },
            labels: { fill: dark.COLORS.YELLOW_300 },
            border: { stroke: dark.COLORS.GRAY_200, strokeWidth: 0.8 }
          }}
          colorScale={[ 
            dark.COLORS.GRAY_200,
            dark.COLORS.ORANGE_400
          ]}
          data={[
            { name: 'Esperado' }, 
            { name: 'Gerado' },
          ]}
        />
    
        <VictoryLine
          data={graph1DataFormatted}
          style={{
            data: { stroke: dark.COLORS.ORANGE_400 },
          }}
        />

        <VictoryLine
          data={graph2DataFormatted}
          style={{
            data: { stroke: dark.COLORS.GRAY_200 },
          }}
        />

      </VictoryChart>

    </Container>
  )
}