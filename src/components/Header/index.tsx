import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ArrowClockwise } from 'phosphor-react-native'

import dark from '../../themes/dark'
import { Container } from './styles'


export function Header({ ...rest }: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <ArrowClockwise size={24} color={dark.COLORS.YELLOW_300} />
    </Container>
  )
}