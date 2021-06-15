import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from "react-router-dom";
import AppContext from 'context/AppContext'
import Header from 'components/header/Header'

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  }),
}));


describe('Test component Header', () => {
  let wrapper
  const state = {
    resetDataProducts: () => { },
  }


  beforeEach(() => {
    wrapper = mount(
      <AppContext.Provider value={state}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </AppContext.Provider>
    )
  })

  test('Render component <Header />', () => {
    const headerComponent = wrapper.find('.header').length
    expect(headerComponent).toBe(1)
  })

  test('Test click function searchProduct', () => {
    const inputComponent = wrapper.find('Input')
    let value = 'macbook'
    inputComponent.props().searchProduct(value)
  })

  test('Test click function goToHomePage', () => {
    const imgDiv = wrapper.find('.logo')
    imgDiv.simulate('click')
  })
})