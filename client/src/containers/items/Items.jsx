import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import AppContext from '@context/AppContext'
import Layout from '@components/layout/Layout'
import { getItems } from '@services/itemsSearchService'
import FreeShipping from '@assets/free-shipping-icon.png'

const Items = () => {
  const { search } = useLocation();
  const { search: itemSearch } = queryString.parse(search);
  const { state: { items }, addDataProducts } = useContext(AppContext)

  useEffect(async () => {
    await searchItems(itemSearch)
  }, [itemSearch])

  const searchItems = async (value) => {
    try {
      if (!value) return
      const { data: { categories, items } } = await getItems(JSON.stringify(value))
      addDataProducts({ items, categories })
    } catch (error) {
      console.log('err: ', error);
    }
  }

  const currencyFormat = num => '$ ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

  return (
    <Layout>
      {items.map(item => (
        <div key={item?.id} className='container-item'>
          <div className='content-img'>
            <img className='image-product' src={item?.picture} alt='producto' />
          </div>
          <div className='content-description-product'>
            <div className='price-product'>
              <p className='price'>{currencyFormat(item.price[0]?.amount)}</p>
              {item.free_shipping && <img className='free-shipping-icon' src={FreeShipping} alt='envío gratis' />}
            </div>
            <p className='title-product' >{item?.title}</p>
          </div>
          <div className='content-info'>
            <p className='info-product'>Capital federal</p>
          </div>
        </div>
      ))
      }
    </Layout>
  )
}

export default Items
