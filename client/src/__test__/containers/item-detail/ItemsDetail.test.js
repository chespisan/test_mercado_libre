import React from 'react'
import { mount } from 'enzyme'
import AppContext from '../../../context/AppContext'
import ItemDetail from '../../../containers/item-detail/ItemDetail'
import axios from "axios";

// jest.mock("axios");

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: 'MLA918171240'
  }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));


describe('Test container Item detail', () => {
  let wrapper
  const state = {
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
    },
    addDataProducts: () => { }
  }

  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    wrapper = mount(
      <AppContext.Provider value={state}>
        <ItemDetail />
      </AppContext.Provider>
    )

  })

  test('Render container Item detail ', async () => {
    const itemDetail = await wrapper.find('.container-item-detail').length
    expect(itemDetail).toBe(1)
  })

  test('Testing function handleBuyProduct', () => {
    const buttonComponent = wrapper.find('Button')
    buttonComponent.simulate('click')
  })

})