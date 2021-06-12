import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const { API_MERCADO_LIBRE } = process.env

export const getCategoryById = async id => {
  const { data } = await axios.get(`${API_MERCADO_LIBRE}categories/${id}`)
  return data
}
