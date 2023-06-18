import { api } from './api'

// import { monthlyMock } from '../mocks/monthlyMock'


export async function getMonthlyGenerationData() {

  // Use mock
  // return monthlyMock
    
  // Use API
  try {
    const { data, status } = await api.get('', { params: { dataType: 'monthly' } })

    if (status === 200 && data?.data) {
      return {data: data.data, status}
    }

    return {data: {}, status}
    
  } catch (error) {
    console.log(error)
    return {data: {}, status: 404}
  }

}