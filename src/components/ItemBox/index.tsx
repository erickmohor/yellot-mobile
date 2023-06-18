import React, { ReactElement } from 'react'

import { CircularPercentage } from '../CircularPercentage'
import { BoxContainer, Subtitle, Title } from './styles'


interface ItemBoxProps {
  title: string,
  subtitle: string | ReactElement,
  icon: ReactElement,
  textSubtitleColor?: 'normal' | 'green' | 'red',
  graphPercentage?: number,
}

export function ItemBox({ title, subtitle, icon, textSubtitleColor, graphPercentage }: ItemBoxProps) {

  return (
    <BoxContainer>
      {icon}
      {
        graphPercentage ? (
          <CircularPercentage
            key={graphPercentage}
            percentage={graphPercentage}
          />
        ) : (
          <>
            <Title>
              {title}
            </Title>
            <Subtitle textSubtitleColor={textSubtitleColor}>
              {subtitle}
            </Subtitle>
          </>
        )
      }
    </BoxContainer>
  )
}
