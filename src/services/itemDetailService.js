import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export const getItemById = async (id) => {
  const { data } = await axios.get(`${REACT_APP_API_URL}items/${id}`)
  return data
}
