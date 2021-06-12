import { getCategoryById } from '@services/categoryService';
import { requestResponse } from '@utils/requestResponse'

export const categoryById = async (req, res) => {
  const { params: { id } } = req

  try {
    const { path_from_root } = await getCategoryById(id)
    const categories = path_from_root.map(category => category.name)
    requestResponse(res, 200, categories, 'Ok')
  } catch (error) {
    const { response: { status, statusText } } = error
    requestResponse(res, status, null, statusText)
  }

}