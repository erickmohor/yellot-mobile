import React from 'react'

import { Container, LoadIndicator } from './styles'


interface LoadingProps {
  size?: 'small' | 'large'
}

export function Loading({ size }: LoadingProps) {
  return (
    <Container>
      <LoadIndicator size={size} />
    </Container>
  )
}