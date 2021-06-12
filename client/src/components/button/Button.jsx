import React from 'react'
import '@components/button/Button.scss'

const Button = ({ children, type, handleBuyProduct }) => {
  return (
    <button className="button" type={type} onClick={handleBuyProduct}>
      {children}
    </button>
  )
}

export default Button
