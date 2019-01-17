import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/user'
import Page from '../components/page'
import { getPhotos } from '../actions/pageAction'

class App extends Component {
  render() {
    const { name } = this.props.user
    const { photos, year, isFetching } = this.props.page
    const { getPhotosAction } = this.props

    return (
      <div className="App">
        <Page
          photos={photos}
          year={year}
          getPhotos={getPhotosAction}
          isFetching={isFetching}
        />
        <User name={name} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
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
