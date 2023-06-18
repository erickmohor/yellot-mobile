import { Platform } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin: ${Platform.OS === 'ios' ? '10px 10px 0 0' : '40px 10px 0 0'};
  `

export const ContainerLogo = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`

export const ContainerBox = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`