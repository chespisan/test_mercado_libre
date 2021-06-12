import structureDataItems from '../utils/structureDataItems'
import { itemsSearch } from '../services/itemsService'
import { requestResponse } from '../utils/requestResponse'

export const searchItems = async (req, res) => {
  const { query: { q: query } } = req

  if (!query) return requestResponse(res, 404, null, 'failed')

  try {
    const { results, filters } = await itemsSearch(query)

    structureDataItems.categories = formatCategories(filters, query)
    structureDataItems.items = formatItems(results)

    requestResponse(res, 200, structureDataItems, 'Ok')

  } catch (error) {

    const { response: { status, statusText } } = error
    requestResponse(res, status, null, statusText)
  }

}

const formatItems = items => {
  let newItems = items.map((item) => (
    {
      id: item?.id,
      title: item?.title,
      price: item?.prices?.prices?.map(price => {
        return {
          currency: price?.currency_id,
          amount: price?.amount,
          decimals: 2
        }
      }),
      picture: item?.thumbnail,
      condition: item?.condition,
      free_shipping: item?.shipping?.free_shipping,
      sold_quantity: item?.sold_quantity,
    }
  ))
  return newItems.slice(0, 4)
}

const formatCategories = (categories, query) => {
  if (!categories.length) return [JSON.parse(query)]
  return categories[0].values[0].path_from_root.map(category => category.name)
}
