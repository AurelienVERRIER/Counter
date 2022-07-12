import React from 'react'

class Counter extends React.Component {



  render() {

    console.log(this.props)

    return (

        
        <div>

        <h2>{this.props.count}</h2>
        
        <button onClick={this.props.substract} style={{color: 'white', backgroundColor: 'red'}}>-</button> 
        <button onClick={this.props.increase} style={{color: 'white', backgroundColor: 'green'}}>+</button> 
	    </div>
  
    )
  }
}

export default Counter