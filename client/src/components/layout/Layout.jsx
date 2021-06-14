import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import AppContext from 'context/AppContext'
import 'components/layout/Layout.scss'

const Layout = ({ children, title, subtitle }) => {
  const {
    state: { categories, items },
  } = useContext(AppContext)

  const createBreadcrumbs = (categories) => {
    let breadcrumb = ''
    let lastCategory = categories[categories.length - 1]
    categories.forEach((category) => {
      breadcrumb += ` ${category} ${lastCategory !== category ? '>' : ''}`
    })
    return breadcrumb
  }

  return (
    <>
      <Helmet>
        {title && <title>Mercado Libre - {title}</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <div className="container-layout">
        {items.length > 0 && (
          <>
            <div className="container-breadcrumb">
              <p className="text-breadcrumbs">
                {createBreadcrumbs(categories)}
              </p>
            </div>
            <div className="container-body">{children}</div>
          </>
        )}
      </div>
    </>
  )
}

export default Layout
