import React from 'react'
import propTypes from 'prop-types'

export default class Page extends React.Component {
  onBtnClick = event => {
    const year = +event.currentTarget.innerText
    this.props.getPhotos(year)
  }

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props

    if (error) {
      return <p className="error"> At load time photos occurred error</p>
    }

    if (isFetching) {
      return <p> Loading...</p>
    } else {
      return photos.map((entry, index) => (
        <div key={entry.id} className="photos">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤ </p>
        </div>
      ))
    }
  }

  render() {
    const { year, photos } = this.props
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2014
          </button>
        </p>
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  year: propTypes.number.isRequired,
  photos: propTypes.array.isRequired,
  getPhotos: propTypes.func.isRequired,
  error: propTypes.string,
  isFetching: propTypes.bool.isRequired,
}
