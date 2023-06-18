import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { Lightning } from 'phosphor-react-native'

import { ItemBox } from '..'
import dark from '../../../themes/dark'


describe('Item Box Component', () => {

  describe('title and subtitle were passed', () => {

    it('should show the title', () => {
      const { getByText } = render(
        <ThemeProvider theme={dark}>
          <ItemBox 
            title='test title' 
            subtitle='' 
            icon={<Lightning />} 
            textSubtitleColor='green'
          />
        </ThemeProvider>
      )
  
      expect( getByText('test title') ).toBeTruthy()
    })

    test('should show the subtitle', () => {
      const { getByText } = render(
        <ThemeProvider theme={dark}>
          <ItemBox 
            title='' 
            subtitle='test subtitle' 
            icon={<Lightning />} 
            textSubtitleColor='red'
          />
        </ThemeProvider>
      )
  
      expect( getByText('test subtitle') ).toBeTruthy()
    })

  })

})