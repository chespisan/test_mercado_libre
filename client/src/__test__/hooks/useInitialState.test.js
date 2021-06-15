import { act, renderHook } from '@testing-library/react-hooks'
import useInitialState from "hooks/useInitialState";

describe('Test custom Hook useInitialState', () => {

  const initialState = {
    items: [],
    categories: []
  }

  const newState = {
    categories: ['consolas y video juegos'],
    items: [{
      "id": "MLA918171240",
      "title": "Macbook Air A1466 Silver 13.3 , Intel Core I5 5350u  8gb De Ram 128gb Ssd, Intel Hd Graphics 6000 1440x900px Macos Sierra 10",
      "price": [
        {
          "currency": "ARS",
          "amount": 154999,
          "decimals": 2
        }
      ],
      "picture": "http://http2.mlstatic.com/D_722803-MLA42901955282_072020-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "sold_quantity": 458
    }]
  }

  test('Testing value initial state', () => {
    const { result } = renderHook(() => useInitialState())
    const { state } = result.current
    expect(state).toEqual(initialState)
  })

  test('Testing function addDataProducts - new state', () => {
    const { result } = renderHook(() => useInitialState())
    const { addDataProducts } = result.current
    act(() => {
      addDataProducts(newState)
    })
    const { state } = result.current
    expect(state).toEqual(newState)
  })

  test('Testing function resetDataProducts - reset state', () => {
    const { result } = renderHook(() => useInitialState())
    const { resetDataProducts } = result.current
    act(() => {
      resetDataProducts(initialState)
    })
    const { state } = result.current
    expect(state).toEqual(initialState)
  })

})