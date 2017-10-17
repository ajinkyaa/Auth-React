import { combineReducers } from 'redux'

const initialState = {
  pending: true,
  logged: false,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGGED_USER':
      debugger;
      return Object.assign({}, state, {
        logged: action.logged
      })
      break
    default:
      return state
  }
}
