import React, { PureComponent } from 'react'
import './LikeButton.css'

class LikeButton extends PureComponent {
  constructor() {
    super()

    this.state = {
      liked: false
    }
  }

  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if (liked) { classes += 'liked'}
    return classes
  }

  toggleLike() {
    console.log('Like button clicked!')
  }
  render() {
    const liked = false
    return (
      <p className = { this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          { liked ? '❤️' : '♡' }
        </button>
        <span className ="likes">{ liked ? 'you like this' : null }
        </span>
        </p>
    )
  }


}

export default LikeButton
