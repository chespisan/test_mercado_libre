import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export const getCategoryById = async (id) => {
  const { data } = await axios.get(`${REACT_APP_API_URL}category/${id}`)
  return data
}
