import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string'
import Search from '@assets/search-icon.png'
import '@components/input/Input.scss'

const Input = ({ searchProduct }) => {
  const { search } = useLocation()
  const { search: itemSearch } = queryString.parse(search)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    setInputValue(itemSearch)
  }, [itemSearch])

  const handleSearchInput = () => {
    const value = inputRef.current.value
    setInputValue(value)
  }

  const handleSearchProduct = () => {
    const value = inputRef.current.value
    setInputValue(value)
    searchProduct(value)
  }

  return (
    <div className="container-input">
      <input
        className="input-search"
        autoComplete="off"
        type="text"
        name="search"
        placeholder="Nunca dejes de buscar"
        value={inputValue}
        ref={inputRef}
        onChange={handleSearchInput}
      />
      <img
        className="icon-search"
        src={Search}
        alt="buscador"
        onClick={handleSearchProduct}
        height='16'
        width='16'
      />
    </div>
  )
}

export default Input
