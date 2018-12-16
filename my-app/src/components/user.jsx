import React from 'react'
import propTypes from 'prop-types'

export default class User extends React.Component {
  render() {
    const { name } = this.props
    return (
      <div className="ib user">
        <p>Привет {name}</p>
      </div>
    )
  }
}

User.propTypes = {
  name: propTypes.string.isRequired,
}
