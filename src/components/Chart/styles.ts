import styled from 'styled-components/native'


export const Container = styled.View`

`

export const Title = styled.Text`
  margin-bottom: 20px;
  text-align: center;
  color: white;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.LIGHT};
`