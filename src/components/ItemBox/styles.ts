import styled, { css } from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import dark from '../../themes/dark'

type SubtitleProps = {
  textSubtitleColor?: 'normal' | 'green' | 'red'
}

export const BoxContainer = styled(LinearGradient).attrs({
  colors: [dark.COLORS.DARK_GRAY_300, dark.COLORS.DARK_GRAY_200],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  width: 160px;
  margin: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`

export const Title = styled.Text`
  margin-top: 10px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  `

export const Subtitle = styled.Text<SubtitleProps>`
  margin-top: 5px;
  color: white;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};

${({ textSubtitleColor }) => textSubtitleColor === 'red' && css`
  color: ${({ theme }) => theme.COLORS.RED_300};`
}

${({ textSubtitleColor }) => textSubtitleColor === 'green' && css`
  color: ${({ theme }) => theme.COLORS.GREEN_300};`
}

`