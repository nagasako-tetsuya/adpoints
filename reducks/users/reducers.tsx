import * as Actions from './actions';
import initialState from "../store/initialState";
import { action } from "./type"

export const UsersReducer = (state = initialState.users, action: action) => {
  switch(action.type){
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}