import styled from 'styled-components/native'

import dark from '../../themes/dark'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: dark.COLORS.YELLOW_300
}))``