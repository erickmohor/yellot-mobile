import { css, styled } from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import dark from '../../themes/dark'


type ContainerProps = {
  alignContent?: 'center'
}

export const Container = styled(LinearGradient).attrs({
  colors: [dark.COLORS.PURPLE_700, dark.COLORS.PURPLE_800],
  start: { x: 0.4, y: 0 },
  end: { x: 1, y: 0.8 },
}) <ContainerProps>`
  flex: 1;
  padding-bottom: 40px;

  ${({ alignContent }) => alignContent === 'center' && css`
    justify-content: center;
    align-items: center;
  `}
`
