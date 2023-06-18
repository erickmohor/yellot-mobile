import { api } from './api'

// import { dailyMock } from '../mocks/dailyMock'


export async function getDailyGenerationData() {

  // Use mock
  // return dailyMock
  
  // Use API
  try {
    const { data, status } = await api.get('', { params: { dataType: 'daily' } })

    if (status === 200 && data?.data) {
      return {data: data.data, status}
    }

    return {data: {}, status}
    
  } catch (error) {
    console.log(error)
    return {data: {}, status: 404}
  }

}