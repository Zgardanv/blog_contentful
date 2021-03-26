import { LOGINCLICK, GETWEATHER, CLIENT_CITY } from "./types";

const defaultState = {
  city: localStorage.getItem("clientCity"),
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GETWEATHER:
      return {
        ...state,
        input: action.payload,
      };
    case LOGINCLICK:
      return {
        ...state,
        type: "click",
      };
    case CLIENT_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
