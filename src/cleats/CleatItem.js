import React, { PureComponent } from 'react'
class CleatItem extends PureComponent {
  render() {
    const { title,summary } = this.props

    return (
      <article className = "cleats">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
        </div>
      </article>
    )
  }
}

export default CleatItem
