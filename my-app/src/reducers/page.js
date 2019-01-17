import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
} from '../actions/pageAction'

export const initialState = {
  year: 2018,
  photos: [],
  isFetching: false,
  error: '',
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true, error: '' }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false, error: '' }

    case GET_PHOTOS_FAIL:
      return { ...state, error: action.payload, isFetching: false }

    default:
      return state
  }
}
