// import { createSelector } from 'reselect';

export const selectUserKey = state => state.userKey;

export const selectRedirect = state => state.redirect;

export const selectIsContactsLoaded = state => state.contactsList && !state.contactsLoading;
export const selectIsContactsLoading = state => state.contactsLoading;
export const selectIsError = state => state.requestError !== null;
export const selectRequestError = state => state.requestError;

export const selectApiInfo = state => state.apiInfo;
export const selectProfile = state => state.profile;

export const selectContactsList = state => state.contactsList;
