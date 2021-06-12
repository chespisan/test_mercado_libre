import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import './Layout.scss'

const Layout = ({ children }) => {
  const { state: { categories, items } } = useContext(AppContext)

  const createBreadcrumbs = (categories) => {
    let breadcrumb = ''
    let lastCategory = categories[categories.length - 1]
    categories.forEach((category) => {
      breadcrumb += ` ${category} ${lastCategory !== category ? '>' : ''}`
    });
    return breadcrumb
  }

  return (
    <>
      <div className='container-layout'>
        {items.length > 0 &&
          <>
            <div className='container-breadcrumb'>
              <p className='text-breadcrumbs'>{createBreadcrumbs(categories)}</p>
            </div>
            <div className='container-body'>
              {children}
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Layout
