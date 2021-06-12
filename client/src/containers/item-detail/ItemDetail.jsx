import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '@context/AppContext'
import Layout from '@components/layout/Layout'
import Button from '@components/button/Button'
import { getItemById } from '@services/itemDetailService'
import { getCategoryById } from '@services/categoryService'
import { currencyFormat } from '@utils/currencyFormat'
import '@containers/item-detail/ItemDetail.scss'

const ItemDetail = () => {
  const [itemData, setItemData] = useState({})
  const { id } = useParams()
  const { addDataProducts } = useContext(AppContext)

  useEffect(async () => {
    await getItem(id)
  }, [])

  const getItem = async (id) => {
    try {
      const { data: item } = await getItemById(id)
      const { data: categories } = await getCategoryById(item.category_id)
      setItemData(item)
      addDataProducts({ items: [item], categories })
    } catch (error) {
      throw new Error('err: ', error)
    }
  }

  const handleBuyProduct = () => { }

  return (
    <Layout>
      {itemData && (
        <div className="container-item-detail">
          <div className="content-item-detail">
            <div className="content-image-item-detail">
              <img className="image-item-detail" src={itemData.picture} />
            </div>
            <div className="content-price-item">
              <p className="conditional-item">
                {itemData?.condition ? 'Nuevo' : 'Usado'} -{' '}
                {itemData.sold_quantity} vendidos
              </p>
              <h3 className="title-item">{itemData?.item?.title}</h3>
              <p className="price-item">
                {currencyFormat(+itemData?.item?.price?.amount)}
                <span className="decimals-item-price">00</span>
              </p>
              <Button type="button" handleBuyProduct={handleBuyProduct}>
                Comprar
              </Button>
            </div>
          </div>
          <div className="content-item-description">
            <h3 className="title-description-item">Descripción del producto</h3>
            <p className="description-item">{itemData?.description}</p>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default ItemDetail
