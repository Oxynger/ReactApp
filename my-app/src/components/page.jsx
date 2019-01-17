import React from 'react'
import propTypes from 'prop-types'

export default class Page extends React.Component {
  onBtnClick = event => {
    const year = +event.currentTarget.innerText
    this.props.getPhotos(year)
  }
  render() {
    const { year, photos, isFetching } = this.props
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
        <h3>{year} год</h3>
        {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
      </div>
    )
  }
}

Page.propTypes = {
  year: propTypes.number.isRequired,
  photos: propTypes.array.isRequired,
  getPhotos: propTypes.func.isRequired,
  isFetching: propTypes.bool.isRequired,
}
