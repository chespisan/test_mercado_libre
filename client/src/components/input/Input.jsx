import React, { useState, useRef, useCallback } from 'react'
import debounce from 'lodash.debounce'
import Search from '@assets/search-icon.png'
import './Input.scss'

const Input = () => {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const handleSearchInput = () => {
    const inputValue = inputRef.current.value
    setInputValue(inputValue)
    if (inputValue.length < 2) return
    _inputDebounce()
  }

  const _inputDebounce = useCallback(debounce(() => searchItems(), 800), [])

  const searchItems = async () => {
    console.log('call service');
  }


  return (
    <div className='container-input'>
      <input className='input-search' type='text' name='search' placeholder='Nunca dejes de buscar' value={inputValue} onChange={handleSearchInput} ref={inputRef} />
      <img className='icon-search' src={Search} alt='buscador' />
    </div>
  )
}

export default Input
