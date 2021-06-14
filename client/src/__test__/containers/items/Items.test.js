import React from 'react'
import { mount } from 'enzyme'
import ROUTES from '../../../routes/routes'
import AppContext from '../../../context/AppContext'
import Items from 'containers/items/Items'

const mockHistoryPush = jest.fn();


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  }),
  useLocation: () => ({
    search: '?search=macbook'
  })
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

describe('Test container Items', () => {
  let wrapper
  const state = {
    addDataProducts: () => { },
    state: {
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
  }

  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    wrapper = mount(
      <AppContext.Provider value={state}>
        <Items />
      </AppContext.Provider>
    )
  })

  test('Render container Items ', () => {
    const items = wrapper.find('.container-item').length
    expect(items).toBe(1)
  })

  test('verify go to item detail page', () => {
    wrapper.find('.container-item').simulate('click')
    expect(mockHistoryPush).toHaveBeenCalledWith(`${ROUTES.ITEMS}/MLA918171240`);
  })

})