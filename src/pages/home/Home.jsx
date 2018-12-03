import React, { Component} from 'react'
import './Home.scss'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  render () {
    return (
      <div className='home'>
        <h1>Hello,  2233111 1world!</h1>
        <h2>It a is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>DDDD</h3>
      </div>
    )
  }
}

export default Home
