import React, { PureComponent } from 'react'
import Title from '../components/Title'
import CleatItem from './CleatItem'

class CleatsContainer extends PureComponent {
  renderCleat(cleat, index) {
    return <CleatItem key={index} {...cleat} />
  }


  render(){
    return(
      <div className="cleats wrapper">
        <header>
          <Title content="Cleats" />
        </header>

        <main>
          { this.props.cleats.map(this.renderCleat) }
        </main>
      </div>
    )
  }
}

export default CleatsContainer
