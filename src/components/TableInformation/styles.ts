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

export const TableContainer = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.COLORS.DARK_GRAY_200};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.YELLOW_300};
  border-radius: 15px;
`

export const TableHeader = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_300};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0 10px 0;
`

export const RowTitle = styled.Text`
  width: 33%;
  padding: 10px;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.DARK_GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  `

export const RowText = styled.Text`
  width: 33%;
  text-align: center;
  
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.COLORS.YELLOW_300};
  height: 1px;
`