import { AUTH_USER } from "../Action/actions";

const initialState = {
  auth: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, auth: action.payload };

    default:
      return state;
  }
};
