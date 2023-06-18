import axios from 'axios'
import { API_TOKEN } from '@env'


export const api = axios.create({
  baseURL: 'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
})