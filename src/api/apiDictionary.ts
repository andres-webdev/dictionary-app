import axios from "axios";

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const requestApi = ({keyword = 'keyword'} = {}) => {
  return axios.get(`${URL}${keyword}`)
}

export default requestApi