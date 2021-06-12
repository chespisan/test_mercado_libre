import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const { API_MERCADO_LIBRE } = process.env

export const getItemsSearch = async item => {
  const { data } = await axios.get(`${API_MERCADO_LIBRE}sites/MLA/search?q=${item}`)
  return data
}

export const getItemById = async id => {
  const { data: itemData } = await axios.get(`${API_MERCADO_LIBRE}items/${id}`)
  const { data: itemDescription } = await axios.get(`${API_MERCADO_LIBRE}items/${id}/description`)
  return { ...itemData, ...itemDescription }
}
