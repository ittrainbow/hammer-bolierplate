import {
  ERROR,
  FETCH_PRODUCTS,
  FETCH_USERS,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  SET_PRODUCTS,
  SET_USERS,
  FETCH_SELECTED_USER,
  SET_SELECTED_USER
} from '../constants/App'
import {
  AUTHENTICATED,
  SHOW_AUTH_MESSAGE,
  SIGNIN_WITH_FACEBOOK_AUTHENTICATED,
  SIGNIN_WITH_GOOGLE_AUTHENTICATED,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS
} from '../constants/Auth'

const initState = {
  loading: false,
  users: [],
  selectedUser: null,
  products: [],
  error: null
}

const app = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_TRUE:
    case FETCH_USERS:
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true
      }

    case SET_LOADING_FALSE:
    case AUTHENTICATED:
    case SHOW_AUTH_MESSAGE:
    case SIGNOUT_SUCCESS:
    case SIGNUP_SUCCESS:
    case SIGNIN_WITH_GOOGLE_AUTHENTICATED:
    case SIGNIN_WITH_FACEBOOK_AUTHENTICATED:
      return {
        ...state,
        loading: false
      }

    case SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }

    case SET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload
      }

    case FETCH_SELECTED_USER:
      return {
        ...state,
        loading: true
      }

    case SET_SELECTED_USER:
      return {
        ...state,
        loading: false,
        selectedUser: action.payload
      }

    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default app
