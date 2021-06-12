import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import debounce from 'lodash.debounce'
import Input from '@components/input/Input'
import './Header.scss'

const Header = () => {
  const history = useHistory()

  const _inputDebounce = useCallback(debounce((value) => goToItemsPage(value), 500), [])

  const goToItemsPage = (value) => history.push(`/items?search=${value}`)

  return (
    <div className='header'>
      <Input _inputDebounce={_inputDebounce} />
    </div>
  )
}

export default Header
