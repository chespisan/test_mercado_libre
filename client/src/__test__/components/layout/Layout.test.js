import React from 'react'
import { mount } from 'enzyme'
import Layout from 'components/layout/Layout'
import AppContext from '../../../context/AppContext';

describe('Test component Layout', () => {
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
    }
  }

  beforeEach(() => {
    wrapper = mount(
      <AppContext.Provider value={state}>
        <Layout children='<div>Hello Layout</div>' title='text for helmet title' subtitle='text for helmet description' />
      </AppContext.Provider>
    )
  })


  test('Render component <Layout />', () => {
    const layout = wrapper.find('.container-layout').length
    expect(layout).toBe(1)
  })

});
