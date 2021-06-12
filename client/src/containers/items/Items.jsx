import React, { useContext, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import ROUTES from '@routes/routes'
import AppContext from '@context/AppContext'
import Layout from '@components/layout/Layout'
import { getItems } from '@services/itemSearchService'
import FreeShipping from '@assets/free-shipping-icon.png'
import { currencyFormat } from '@utils/currencyFormat'
import '@containers/items/Items.scss'

const Items = () => {
  const history = useHistory()
  const { search } = useLocation()
  const { search: itemSearch } = queryString.parse(search)
  const {
    state: { items },
    addDataProducts,
  } = useContext(AppContext)

  useEffect(async () => {
    await searchItems(itemSearch)
  }, [itemSearch])

  const searchItems = async (value) => {
    try {
      if (!value) return
      const {
        data: { categories, items },
      } = await getItems(JSON.stringify(value))
      addDataProducts({ items, categories })
    } catch (error) {
      throw new Error('err: ', error)
    }
  }

  const goToItemDetail = (id) => {
    history.push(`${ROUTES.ITEMS}/${id}`)
  }

  return (
    <Layout title='Resultado búsqueda de productos' subtitle='En Mercado Libre podrás encontrar un gran listado de los productos que buscas'>
      {items.map((item) => (
        <div
          key={item?.id}
          className="container-item"
          onClick={() => goToItemDetail(item.id)}
        >
          <div className="content-img">
            <img className="image-product" src={item?.picture} alt="producto" />
          </div>
          <div className="content-description-product">
            <div className="price-product">
              <p className="price">{item.price && currencyFormat(item?.price[0]?.amount)}</p>
              {item.free_shipping && (
                <img
                  className="free-shipping-icon"
                  src={FreeShipping}
                  alt="envío gratis"
                />
              )}
            </div>
            <p className="title-product">{item?.title}</p>
          </div>
          <div className="content-info">
            <p className="info-product">Capital federal</p>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Items
