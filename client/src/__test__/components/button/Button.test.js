import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../../components/button/Button'

describe('Test Component', () => {
  test('Render component <Button />', () => {
    let wrapper = shallow(<Button children='text' type='button' handleBuyProduct={() => { }} />)
    expect(wrapper.length).toEqual(1)
  })

});
