//URL: /3/movie/now_playing?language=pt-BR&page=1
//Base da URL: https://api.themoviedb.org

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api