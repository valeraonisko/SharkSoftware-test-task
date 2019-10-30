import {connect} from 'react-redux';
import {loadContacts, loginFacebook, receiveLogin, loadApiInfo,
  dropRedirect, execLogout,setUserKey } from '../redux/actions';
import Main from './Main';
import {selectRedirect, isContactsLoading,
     isContactsLoaded, selectIsError, selectRequestError,
     selectUserKey, selectIsContactsLoaded,
     selectIsContactsLoading, selectContactsList, selectApiInfo, selectProfile } from '../redux/selectors';

function mapStateToProps(state) {
  return {
    redirect: selectRedirect(state),
    isError: selectIsError(state),
    requestError: selectRequestError(state),
    userKey: selectUserKey(state),
    isContactsLoaded: selectIsContactsLoaded(state),
    isContactsLoading: selectIsContactsLoading(state),
    apiInfo: selectApiInfo(state),
    profile: selectProfile(state),
    contactsList: selectContactsList(state)
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setUserKey: (userKey) => dispatch(setUserKey(userKey)),

    loadApiInfo: () => dispatch(loadApiInfo()),
    loadContacts: () => dispatch(loadContacts()),
    loginFacebook: () => dispatch(loginFacebook()),
    dropRedirect: () => dispatch(dropRedirect()),
    execLogout: () => dispatch(execLogout())


  };
};

const MainHandler = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainHandler;
