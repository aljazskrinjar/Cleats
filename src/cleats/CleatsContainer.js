import React, { PureComponent } from 'react'
import Title from './components/Title.js'

class CleatsContainer extends PureComponent {
  renderCleats(cleat, index) {
    return null
  }


  render(){
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe) }
        </main>
      </div>
    )
  }
}

export default CleatsContainer
