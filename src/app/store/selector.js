import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { store } from ".";

const getAuth = (state) => state.auth;

export const getUserData = () => useSelector(createSelector([getAuth], (auth) => auth.user)) || {};
