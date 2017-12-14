import React, { PureComponent } from 'React'

class Title from extends PureComponent {
  render() {
      return(
        <h1>{ this.props.content }</h1>
      )
  }
}

export default Title
