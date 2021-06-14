import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import ROUTES from 'routes/routes'
import AppContext from 'context/AppContext'
import Input from 'components/input/Input'
import Logo from 'assets/logo.png'
import 'components/header/Header.scss'

const Header = () => {
  const history = useHistory()
  const { resetDataProducts } = useContext(AppContext)

  const searchProduct = (value) => {
    history.push(`${ROUTES.ITEMS}?search=${value}`)
  }

  const goToHomePage = () => {
    resetDataProducts()
    history.push(ROUTES.HOME)
  }

  return (
    <div className="header">
      <img
        className="logo"
        src={Logo}
        alt="logo-mercado-libre"
        onClick={goToHomePage}
        height='50'
        width='100'
      />
      <Input searchProduct={searchProduct} />
    </div>
  )
}

export default Header
