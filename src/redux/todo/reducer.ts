import * as counters from "./actions";
import { ActionType } from "typesafe-actions";
import { INCREMENT } from "./constants";

export type CountersAction = ActionType<typeof counters>;

export type CountersState = {
  count: number;
};

const initialState: CountersState = {
  count: 0
};

export default (state = initialState, action: CountersAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload
      };
    default:
      return state;
  }
};
