import axios from 'axios'

const client  = axios.create({})

client.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

client.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  },
)

export default client
