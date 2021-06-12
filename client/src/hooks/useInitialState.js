import { useState } from 'react'

const initialState = {
  categories: [],
  items: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addDataProducts = payload => {
    setState({
      ...state,
      items: [...payload.items],
      categories: [...payload.categories]
    })
  }

  return {
    addDataProducts,
    state
  }
}

export default useInitialState
