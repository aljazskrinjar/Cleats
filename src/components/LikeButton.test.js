// import React from 'react'
// import { shallow } from 'enzyme'
// import chai, { expect } from 'chai'
// import chaiEnzyme from 'chai-enzyme'
// import LikeButton from './LikeButton'
//
// chai.use(chaiEnzyme())
//
// describe('<LikeButton />', () => {
//   const button = shallow(<LikeButton />)
//
//   it('is wrapped in a paragraph with class "like"', () => {
//     expect(button).to.have.tagName('p')
//     expect(button).to.have.className('like')
//   })
//   it('has an initial state for "liked", that is "false"', () => {
//     expect(button.state('liked')).to.eq(false)
//   })
// })

// src/components/LikeButton.test.js
import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import LikeButton from './LikeButton'

chai.use(chaiEnzyme())

describe('<LikeButton />', () => {
  const button = shallow(<LikeButton />)

  it('is wrapped in a paragraph with class "LikeButton"', () => {
    expect(button).to.have.tagName('p')
    expect(button).to.have.className('like')
  })

  describe('click it', () => {
    it('toggles the "liked" state', () => {
      // initial
      expect(button.state('liked')).to.eq(false)

      // first click
      button.find('button').simulate('click')
      expect(button.state('liked')).to.eq(true)

      // second click
      button.find('button').simulate('click')
      expect(button.state('liked')).to.eq(false)
    })
  })
})
