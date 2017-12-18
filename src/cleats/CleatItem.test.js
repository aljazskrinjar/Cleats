import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import CleatItem from './CleatItem'

chai.use(chaiEnzyme())

const cleats= {
    title: 'Adidas Predator',
    summary: 'Leather boot',
  }

  describe('<CleatItem />', () => {
    const container =shallow(<CleatItem { ...cleats } />)

    it('is wrapped in a article tag with class name "cleat"', () => {
      expect(container).to.have.tagName('article')
      expect(container).to.have.className('cleats')
    })
    it('contains a the title', () => {
      expect(container.find('h1')).to.have.text(cleats.title)
    })

  })
