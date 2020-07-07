import { shallow } from 'enzyme'
import React from 'react'
import Root from './Root'

describe('Root', () => {
  it('Should render.', () => {
    const subject = shallow(<Root />)

    expect(subject.exists()).toBe(true)
  })
})
