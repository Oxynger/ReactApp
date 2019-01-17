import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/user'
import Page from '../components/page'
import { getPhotos } from '../actions/pageAction'
import { handleLogin } from '../actions/userAction'

class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction } = this.props

    return (
      <div className="App">
        <Page
          photos={page.photos}
          year={page.year}
          isFetching={page.isFetching}
          getPhotos={getPhotosAction}
        />
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin()),
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
