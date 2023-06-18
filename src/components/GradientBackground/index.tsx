import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native'

import { Container } from './styles'


interface GradientBackgroundProps {
  children: ReactNode,
  alignContent?: 'center'
}

export function GradientBackground({ children, alignContent }: GradientBackgroundProps) {

  return (
    <Container alignContent={alignContent}>
      <SafeAreaView style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
    </Container>
  )
}
