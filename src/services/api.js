import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/freonzx/rocketshoes-json-server/',
})

export default api
