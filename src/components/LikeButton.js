import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './LikeButton.css'
import HeartGrey from '../images/greyHeart.svg'
import HeartRed from '../images/redHeart.svg'

class LikeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }


  classNames() {
    const { liked } = this.props
    let classes = 'LikeButton'

    if (liked) { classes += 'liked'}
    return classes
  }

  toggleLike() {
    this.props.onChange()
  }


  render() {
    const { liked } = this.props
    return (
      <p className = { this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
        <img alt="like" className="heart" src={ liked ? HeartRed : HeartGrey } />
        <span className="copy">
          <img alt="like" className="heart" src={ liked ? HeartRed : HeartGrey } />
        </span>
        </button>
        <span className ="likes">{ liked ? 'You like this' : null }
        </span>
        </p>
    )
  }


}

export default LikeButton
