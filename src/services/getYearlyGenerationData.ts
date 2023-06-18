import { api } from './api'

// import { yearlyMock } from '../mocks/yearlyMock'


export async function getYearlyGenerationData() {

  // Use mock
  // return yearlyMock
    
  // Use API
  try {
    const { data, status } = await api.get('', { params: { dataType: 'yearly' } })

    if (status === 200 && data?.data) {
      return {data: data.data, status}
    }

    return {data: {}, status}
    
  } catch (error) {
    console.log(error)
    return {data: {}, status: 404}
  }

}