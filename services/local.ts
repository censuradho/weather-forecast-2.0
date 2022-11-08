import axios from 'axios'

export const localApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL
})
