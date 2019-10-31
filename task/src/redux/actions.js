export const CONTACTS_LOAD = 'contacts_load';
export const REQUEST_ERROR = 'request_error';

export const CONTACTS_RECEIVED = 'contacts_received';

export const DROP_REDIRECT = 'drop_redirect';

export const LOGIN_FACEBOOK = 'login_facebook';
export const SET_LOGIN_FACEBOOK = 'set_login_facebook';
export const LOGIN_DATA_RECEIVED = 'login_data_received';
export const SET_USER_KEY = 'set_user_key';

export const API_INFO_RECEIVED = 'api_info_received';
export const SET_API_INFO = 'set_api_info';

export const PROFILE_RECEIVED = 'profile_received';
export const SET_LOAD_PROFILE = 'set_load_profile';


export const EXEC_LOGOUT = 'exec_logout';

const contactUrl = 'https://randomuser.me/api/?page=1&results=10&seed=abc';
const loginUrl = 'https://randomuser.me/api/';
const apiUrl = 'https://api.publicapis.org/random';

export const setLoadContacts = () => {
  return {
    type: CONTACTS_LOAD
  }
}

export const errorRequest = (err) => {
  return {
    type: REQUEST_ERROR,
    payload: err
  }
}

export const loadContacts = () => (dispatch) => {
  dispatch(setLoadContacts());
  fetch(contactUrl)
    .then(response => {
      if(response.ok) {
        response.json().then(contactsList => {
          dispatch(receiveContacts(contactsList))
        })
      } else {
        console.log('error load contacts');
        dispatch(errorRequest('error load contacts'))
      }
    })
    .catch(err => {
    console.log('error load contacts');
    dispatch(errorRequest(err.message))
    })
};

export const receiveContacts = (contactsList) => {
  return {
    type: CONTACTS_RECEIVED,
    payload: contactsList.results
  }
}

export function dropRedirect() {
  return {
    type: DROP_REDIRECT
  };
}

export function setLoginFacebook() {
  return {
    type: SET_LOGIN_FACEBOOK
  };
}

export function receiveLogin(loginInfo) {
  return {
    type: LOGIN_FACEBOOK,
    payload: loginInfo
  };
}

export function setUserKey(userKey) {
  return {
    type: SET_USER_KEY,
    payload: userKey
  };
}

export const loginFacebook = () => (dispatch) => {
  dispatch(setLoginFacebook());
  fetch(loginUrl)
    .then(response => {
      if(response.ok) {
        response.json().then(loginData => {
          dispatch(receiveLogin(loginData))
        })
      } else {
        console.log('error login Facebook');
        dispatch(errorRequest('error login Facebook'))
      }
    })
    .catch(err => {
    console.log('error login Facebook');
    dispatch(errorRequest(err.message))
    })
};

export function setApiInfo() {
  return {
    type: SET_API_INFO
  };
}

export function receiveApiInfo(apiInfo) {
  return {
    type: API_INFO_RECEIVED,
    payload: apiInfo.entries[0]
  };
}

export const loadApiInfo = () => (dispatch) => {
  dispatch(setApiInfo());
  fetch(apiUrl)
    .then(response => {
      if(response.ok) {
        response.json().then(apiInfo => {
          dispatch(receiveApiInfo(apiInfo))
        })
      } else {
        console.log('error receive apiInfo');
        dispatch(errorRequest('error receive apiInfo'))
      }
    })
    .catch(err => {
    console.log('error receive apiInfo');
    dispatch(errorRequest(err.message))
    })
};

export function setLoadProfile() {
  return {
    type: SET_LOAD_PROFILE
  };
}

export function receiveProfile(profile) {
  return {
    type: PROFILE_RECEIVED,
    payload: profile
  };
}

export const loadProfile = () => (dispatch) => {
  dispatch(setLoadProfile());
  fetch(loginUrl)
    .then(response => {
      if(response.ok) {
        response.json().then(profile => {
          dispatch(receiveProfile(profile))
        })
      } else {
        console.log('error receive profile');
        dispatch(errorRequest('error receive profile'))
      }
    })
    .catch(err => {
    console.log('error receive profile');
    dispatch(errorRequest(err.message))
    })
};
export function execLogout() {
  return {
    type: EXEC_LOGOUT
  };
}
