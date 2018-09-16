import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { SIGN_UP_SUCCESS } from "./constants";

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  token: string | null;
};

const initialState: UserState = {
  token: null
};

export default (state = initialState, action: UserAction) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        token:  action.payload
      };
    default:
      return state;
  }
};
