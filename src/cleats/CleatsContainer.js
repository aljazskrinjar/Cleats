import React, { PureComponent } from 'react'
import Title from '../components/Title'
import CleatItem, {cleatShape} from './CleatItem'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

class CleatsContainer extends PureComponent {

  static propTypes = {

    cleats: PropTypes.arrayOf(cleatShape).isRequired,
  }
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
