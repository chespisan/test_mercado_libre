import structureData from '@utils/structureDataItems'
import { getItemsSearch } from '@services/itemsService'
import { requestResponse } from '@utils/requestResponse'

export const itemSearch = async (req, res) => {
  const { query: { q: query } } = req
  let newStructureData = Object.assign({}, structureData)


  if (!query) return requestResponse(res, 404, null, 'failed')

  try {
    const { results, filters } = await getItemsSearch(query)

    newStructureData.categories = formatCategories(filters, query)
    newStructureData.items = formatItems(results)

    requestResponse(res, 200, newStructureData, 'Ok')
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
