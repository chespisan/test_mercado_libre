import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export const getItems = async (query) => {
  const { data } = await axios.get(`${REACT_APP_API_URL}items?q=${query}`)
  return data
}
