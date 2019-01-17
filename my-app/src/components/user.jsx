import React from 'react'
import propTypes from 'prop-types'

export default class User extends React.Component {
  renderTamplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p> An Error occuring durign the request. Please refresh page </p>
    }

    if (isFetching) {
      return <p> Loading...</p>
    }

    if (name) {
      return <p> Hi, {name}!</p>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Login
        </button>
      )
    }
  }

  render() {
    return <div className="ib user">{this.renderTamplate()}</div>
  }
}

User.propTypes = {
  name: propTypes.string.isRequired,
  error: propTypes.string,
  isFetching: propTypes.bool.isRequired,
  handleLogin: propTypes.func.isRequired,
}
