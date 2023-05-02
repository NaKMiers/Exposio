import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import galleryReducer from './galleryReducer'
import backgroundReducer from './backgroundReducer'

const reducers = combineReducers({
   blogs: blogReducer,
   galleries: galleryReducer,
   backgrounds: backgroundReducer,
})

export default reducers
