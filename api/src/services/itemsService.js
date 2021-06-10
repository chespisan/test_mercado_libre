import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const { API_MERCADO_LIBRE } = process.env

export const itemsSearch = async item => {
  const { data } = await axios.get(`${API_MERCADO_LIBRE}sites/MLA/search?q=${item}`)
  return data
}