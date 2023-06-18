import { api } from './api'

// import { hourlyMock } from '../mocks/hourlyMock'


export async function getHourlyGenerationData() {

  // Use mock
  // return hourlyMock
    
  // Use API
  try {
    const { data, status } = await api.get('', { params: { dataType: 'hourly' } })

    if (status === 200 && data?.data) {
      return {data: data.data, status}
    }

    return {data: {}, status}
    
  } catch (error) {
    console.log(error)
    return {data: {}, status: 404}
  }

}