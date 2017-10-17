import { createStore, combineReducers } from 'redux'
import rootReducer from './rootReducer'

const reducers = combineReducers({
  loggedUserState: rootReducer
})

const store = createStore(reducers)

export default store