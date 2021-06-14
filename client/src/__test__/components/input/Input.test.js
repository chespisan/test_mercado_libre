import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from "react-router-dom";
import Input from '../../../components/input/Input'


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    search: '?search=macbook'
  })
}));


describe('Test component Input', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Input searchProduct={() => { }} />)
      </MemoryRouter>
    )
  })


  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Render component <Input />', () => {
    const inputComponent = wrapper.find('.container-input').length
    expect(inputComponent).toBe(1)
  })

  test('Testing onChange Input', () => {
    const input = wrapper.find('.input-search')
    input.simulate('change')
  })

  test('Testing onClick Input', () => {
    const input = wrapper.find('.icon-search')
    input.simulate('click')
  })

})