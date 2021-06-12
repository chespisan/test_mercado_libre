import { useState } from 'react'

const initialState = {
  categories: [],
  items: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addDataProducts = (payload) => {
    setState({
      ...state,
      items: [...payload.items],
      categories: [...payload.categories],
    })
  }

  const resetDataProducts = () => {
    setState({
      ...state,
      items: [],
      categories: [],
    })
  }

  return {
    addDataProducts,
    resetDataProducts,
    state,
  }
}

export default useInitialState
