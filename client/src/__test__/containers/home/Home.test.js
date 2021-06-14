import React from 'react'
import { shallow } from 'enzyme'
import Home from 'containers/home/Home'

describe('test Container component Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  test('Render container Component <Home />', () => {
    const Home = wrapper.find('Layout').length
    expect(Home).toBe(1)
  })

});
