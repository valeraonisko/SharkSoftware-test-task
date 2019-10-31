import { REQUEST_ERROR, CONTACTS_RECEIVED, DROP_REDIRECT,
   CONTACTS_LOAD, SET_LOGIN_FACEBOOK, LOGIN_FACEBOOK,  SET_USER_KEY, LOGIN_DATA_RECEIVED,
   SET_API_INFO, API_INFO_RECEIVED, PROFILE_RECEIVED, SET_LOAD_PROFILE, EXEC_LOGOUT } from './actions';

const initialState = {
  contactsList: null,
  contactsLoading: false,
  requestError: null,

  redirect: null,
  userKey: null,
  apiInfo: null,
  profile: null
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case CONTACTS_LOAD:
      return {
        ...state,
        contactsList: null,
        contactsLoading: true,
        requestError: null
      };
    case REQUEST_ERROR:
      return {
        ...state,
        contactsList: null,
        contactsLoading: false,
        requestError: `post request error: ${action.payload}`
      };
    case CONTACTS_RECEIVED:
      return {
        ...state,
        contactsLoading: false,
        contactsList: action.payload
      };
    case DROP_REDIRECT:
        return {
          ...state,
          redirect: null
        };
    case SET_LOGIN_FACEBOOK:
      return {
        ...state,
        userKey: null,
        profile: null,
        requestError: null
      };
    case LOGIN_FACEBOOK:
      localStorage.setItem("userKey", action.payload.info.seed);
      return {
        ...state,
        userKey: action.payload.info.seed,
        profile: action.payload.results[0]

      };
    case LOGIN_DATA_RECEIVED:
      return {
        ...state,
        loginData: action.payload

      };
    case SET_USER_KEY:
      return {
        ...state,
        userKey: action.payload

      };
    case SET_API_INFO:
      return {
        ...state,
        apiInfo: null,
        requestError: null
      };
    case API_INFO_RECEIVED:
      return {
        ...state,
        apiInfo: action.payload

      };
    case SET_LOAD_PROFILE:
      return {
        ...state,
        profile: null,
        requestError: null
      };
    case PROFILE_RECEIVED:
      return {
        ...state,
        profile: action.payload.results[0]

      };
    case EXEC_LOGOUT:
      localStorage.removeItem("userKey");
      return {
        ...state,
        redirect: '/',
        userKey: null
      };

    default:
      return state;
  }
}
