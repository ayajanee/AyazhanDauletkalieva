import { viewType } from "../types/viewActionType";

const INITIAL_STATE = {
  loading: false,
};

export default function reducerView(state = INITIAL_STATE, action) {
  switch (action.type) {
    case viewType.LOADING: {
      return { loading: true };
    }
    case viewType.LOADED: {
      return { loading: false };
    }
    default:
      return state;
  }
};
