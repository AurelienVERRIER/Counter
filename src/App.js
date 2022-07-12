import React from 'react'
import Counter from './components/Counter.js'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      count: 0
    }
  }    

  handleButtonClickSubstract = () => {
    if (this.state.count>0) {    
    this.setState({ count: this.state.count - 1 })
  } else {
    this.setState({ count: this.state.count})
  }
  }


  handleButtonClickIncrease = () => {
    this.setState({ count: this.state.count + 1 })
  }


  render() {
    return (
      <div>
          <h1>Compteur</h1>
          <Counter 
            count = {this.state.count}
            substract = {this.handleButtonClickSubstract}
            increase = {this.handleButtonClickIncrease}
          />
      </div>
    )
  }
}

export default App

