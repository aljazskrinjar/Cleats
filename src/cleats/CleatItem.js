import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton.js'
class CleatItem extends PureComponent {
  render() {
    const { title,summary } = this.props

    return (
      <article className = "cleats">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <LikeButton />
        </div>
      </article>
    )
  }
}

export default CleatItem
