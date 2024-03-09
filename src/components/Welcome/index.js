// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}
  onSubscribe = () => {
    this.setState(prevState => ({
      isSubscribed: (prevState.isSubscribed = false),
    }))
  }
  onSubscribed = () => {
    this.setState(prevState => ({
      isSubscribed: (prevState.isSubscribed = true),
    }))
  }

  render() {
    const {isSubscribed} = this.state
    let authButton
    if (isSubscribed === true) {
      authButton = (
        <button className="btn" onClick={this.onSubscribe}>
          Subscribe
        </button>
      )
    } else {
      authButton = (
        <button className="btn" onClick={this.onSubscribed}>
          Subscribed
        </button>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}

export default Welcome
