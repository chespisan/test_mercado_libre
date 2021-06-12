import React, { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string'
import Search from '@assets/search-icon.png'
import './Input.scss'

const Input = ({ _inputDebounce }) => {
  const { search } = useLocation();
  const { search: itemSearch } = queryString.parse(search);
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    setInputValue(itemSearch)
  }, [itemSearch])

  const handleSearchInput = () => {
    const value = inputRef.current.value
    setInputValue(value)
    _inputDebounce(value)
  }

  return (
    <div className='container-input'>
      <input className='input-search' autoComplete='off' type='text' name='search' placeholder='Nunca dejes de buscar' value={inputValue} onChange={handleSearchInput} ref={inputRef} />
      <img className='icon-search' src={Search} alt='buscador' />
    </div>
  )
}

export default Input
