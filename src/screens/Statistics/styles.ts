import { Platform } from 'react-native'
import styled from 'styled-components/native'

type MenuProps = {
  isActive?: boolean
}

export const HeaderContainer = styled.View`
  margin-right: 10px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? '20px' : '40px'};
  margin-left: 34px;
`

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  color: white;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.LIGHT};
`

export const Menu = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 5px;
  gap: 10px;
`

export const MenuItem = styled.TouchableOpacity<MenuProps>`
  width: 80px;
  background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.YELLOW_300 : theme.COLORS.DARK_GRAY_200};
  border-color: ${({ theme }) => theme.COLORS.YELLOW_300};
  border-width: 1px;
  border-radius: 20px;
`

export const MenuText = styled.Text<MenuProps>`
  padding: 5px;
  text-align: center;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.DARK_GRAY_200 : theme.COLORS.YELLOW_300};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`