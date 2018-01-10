import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton.js'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleLikeCleat } from '../actions/cleats'

export const cleatShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  liked: PropTypes.bool
})

class CleatItem extends PureComponent {


  static propTypes = {
    ...cleatShape.isRequired,
    toggleLikeCleat: PropTypes.func.isRequired
  }

  toggleLike = () => {
    const { _id } = this.props
    this.props.toggleLikeCleat(_id)
  }

  render() {
    const { title, summary, liked } = this.props

    return (
      <article className = "CleatItem">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <LikeButton
            onChange={this.toggleLike}
            liked={liked}
          />
        </div>
      </article>
    )
  }
}

const mapDispatchToProps = {
  toggleLikeCleat
}

export default connect(null, mapDispatchToProps)(CleatItem)
