import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import galleryReducer from './galleryReducer'

const reducers = combineReducers({ blogs: blogReducer, galleries: galleryReducer })

export default reducers
