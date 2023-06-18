import React from 'react'
import { FlatList } from 'react-native'

import {
  Container,
  RowContainer,
  RowText,
  RowTitle,
  Separator,
  TableContainer,
  TableHeader,
  Title
} from './styles'


interface TableInformationProps {
  title: string,
  xLabel: string,
  yLabel: string,
  xValues: string[] | null,
  yValues: number[] | null,
  expected: number[] | null,
}

export function TableInformation({ title, xLabel, yLabel, xValues, yValues, expected }: TableInformationProps) {
  const informationData = []

  if (xValues && yValues && expected) {
    for (let index = 0; index < xValues.length; index++) {
      informationData.push({ x: xValues[index], y: yValues[index], z: expected[index] })
    }
  }

  return (
    <Container>
      <Title>{title}</Title>

      <TableContainer>

        <TableHeader>
          <RowTitle>{xLabel}</RowTitle>
          <RowTitle>{yLabel}</RowTitle>
          <RowTitle>Valor Esperado</RowTitle>
        </TableHeader>

        <FlatList
          scrollEnabled={false}
          data={informationData}
          ItemSeparatorComponent={() => (
            <Separator />
          )}
          renderItem={(item) => {
            return (
              <RowContainer>
                <RowText>{item.item.x}</RowText>
                <RowText>{item.item.y}</RowText>
                <RowText>{item.item.z}</RowText>
              </RowContainer>
            )
          }}
        />
      </TableContainer>

    </Container>
  )
}
