// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstNameVisible: false, lastNameVisible: false}

  onClickFirstNameButton = () => {
    const {firstNameVisible, lastNameVisible} = this.state
    if (firstNameVisible === true) {
      this.setState(prevState => ({firstNameVisible: false}))
    } else {
      this.setState(prevState => ({firstNameVisible: true}))
    }
  }

  showingFirstName = () => {
    const {firstNameVisible, lastNameVisible} = this.state
    if (firstNameVisible === true) {
      return (
        <div className="name-card">
          <p>Joe</p>
        </div>
      )
    }
    return null
  }

  onClickLastNameButton = () => {
    const {firstNameVisible, lastNameVisible} = this.state

    if (lastNameVisible === true) {
      this.setState(prevState => ({lastNameVisible: false}))
    } else {
      this.setState(prevState => ({lastNameVisible: true}))
    }
  }

  showingLastName = () => {
    const {firstNameVisible, lastNameVisible} = this.state
    if (lastNameVisible === true) {
      return (
        <div className="name-card">
          <p>Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {firstNameVisible, lastNameVisible} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="button-card">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstNameButton}
            >
              Show/hide Firstname
            </button>
            {this.showingFirstName()}
          </div>
          <div className="button-card">
            <button
              type="button"
              className="button"
              onClick={this.onClickLastNameButton}
            >
              Show/hide Lastname
            </button>
            {this.showingLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
