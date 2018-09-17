import * as counters from "./actions";
import { ActionType } from "typesafe-actions";
import produce from "immer";

import { INCREMENT } from "./constants";

export type CountersAction = ActionType<typeof counters>;

export type CountersState = {
  count: number;
};

const initialState: CountersState = {
  count: 0
};

export default produce((draft: CountersState, action: CountersAction) => {
  switch (action.type) {
    case INCREMENT:
      draft.count += action.payload;
      break;
  }
}, initialState);
