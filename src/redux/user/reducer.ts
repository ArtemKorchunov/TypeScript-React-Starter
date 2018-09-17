import { UserAction } from "./reducer";
import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import produce from "immer";

import { SIGN_UP_SUCCESS } from "./constants";

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  token: string | null;
};

const initialState: UserState = {
  token: null
};

export default produce((draft: UserState, action: UserAction) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      draft.token = action.payload;
      break;
  }
}, initialState);
