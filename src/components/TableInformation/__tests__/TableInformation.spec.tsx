import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { TableInformation } from '..'
import dark from '../../../themes/dark'


const renderComponent = () => {
  return render(
    <ThemeProvider theme={dark}>
      <TableInformation 
        expected={[200, 200]}
        title='Test Title'
        xLabel='X Label'
        xValues={['2023-01-01', '2023-01-01']}
        yLabel='Y Label'
        yValues={[100, 100]}
      />
    </ThemeProvider>
  )
}

describe('Table Information Component', () => {

  describe('information were passed', () => {

    it('should show the title', () => {
      const { getByText } = renderComponent()

      expect( getByText('Test Title') ).toBeTruthy()
    })

    it('should show the x label', () => {
      const { getByText } = renderComponent()

      expect( getByText('X Label') ).toBeTruthy()
    })

    it('should show the y label', () => {
      const { getByText } = renderComponent()

      expect( getByText('Y Label') ).toBeTruthy()
    })

    it('should show the expected label', () => {
      const { getByText } = renderComponent()

      expect( getByText('Valor Esperado') ).toBeTruthy()
    })

    it('should show the x values', () => {
      const { getAllByText } = renderComponent()

      expect( getAllByText('2023-01-01').length ).toBe(2)
    })

    it('should show the y values', () => {
      const { getAllByText } = renderComponent()

      expect( getAllByText('100').length ).toBe(2)
    })

    it('should show the expected values', () => {
      const { getAllByText } = renderComponent()

      expect( getAllByText('200').length ).toBe(2)
    })

  })

})