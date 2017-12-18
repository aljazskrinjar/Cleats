import React from 'react'
import chai, { expect } from 'chai'
import {shallow} from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CleatsContainer from './CleatsContainer'

chai.use(chaiEnzyme())

describe('<CleatsContainer />', () => {
  const container = shallow(<CleatsContainer cleats= {[]} />)

  it('is wrapped in a div with class name "cleats"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('cleats')
  })
})
