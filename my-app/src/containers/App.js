import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/user'
import Page from '../components/page'
import { setYear } from '../actions/pageAction'

class App extends Component {
  render() {
    const { name } = this.props.user
    const { photos, year } = this.props.page
    const { setYear } = this.props

    return (
      <div className="App">
        <Page photos={photos} year={year} setYear={setYear} />
        <User name={name} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYear: year => dispatch(setYear(year)),
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
