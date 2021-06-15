import { getItemById } from 'services/itemsService';
import { requestResponse } from 'utils/requestResponse'
import structureData from 'utils/structureDataItems'


export const itemDescription = async (req, res) => {
  const { params: { id } } = req
  let newStructureData = Object.assign({}, structureData)

  try {
    const data = await getItemById(id)
    newStructureData.item = {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: 2
      },
    }
    newStructureData.category_id = data.category_id
    newStructureData.picture = data.pictures[0].url
    newStructureData.condition = data.condition
    newStructureData.free_shipping = data.shipping.free_shipping
    newStructureData.sold_quantity = data.sold_quantity
    newStructureData.description = data.plain_text
    requestResponse(res, 200, newStructureData, 'Ok')
  } catch (error) {
    const { response: { status, statusText } } = error
    requestResponse(res, status, null, statusText)
  }

}