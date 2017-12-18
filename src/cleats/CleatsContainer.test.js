import React from 'react'
import chai, { expect } from 'chai'
import {shallow} from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CleatsContainer from './CleatsContainer'
import Title from '../components/Title'
import CleatItem from './CleatItem'

chai.use(chaiEnzyme())

const cleats = [
  {
    title: 'Adidas Predator',
    summary: 'Leather boot',
  },
  {
    title: 'Nike Premiere Pro',
    summary: 'Old school boot with modern touch'
  },
  {
    title: 'Puma evoTouch',
    summary: 'sock boot combined with kenguru leather'
  },
]

describe('<CleatsContainer />', () => {
  const container = shallow(<CleatsContainer cleats= {cleats} />)

  it('is wrapped in a div with class name "cleats"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('cleats')
  })
  it('contains a Title', () => {
    expect(container).to.descendants(Title)
  })
  it('renders all cleats as a CleatItem', () => {
    expect(container).to.have.exactly(3).descendants(CleatItem)

  })
})
