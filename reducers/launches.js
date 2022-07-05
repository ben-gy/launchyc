import { ActionTypes } from "../action";

const initialState = {
  filters: [],
}

export default (state = initialState, action) => {
  try {
    switch (action.type) {
      case ActionTypes.LOADING_ALL_LAUNCHES:
        return {
          ...state,
          inTraffic: true,
        };

      case ActionTypes.LOADED_ALL_LAUNCHES:
        return {
          ...state,
          inTraffic: false,
          launches: action.payload,
        };
      
      case ActionTypes.ERROR_LOADING_ALL_LAUNCHES:
        return {
          ...state,
          inTraffic: false,
        };
    
      default:
        return state;
    }
  } catch (error) {
    console.log('error in launches reducer', error);
  }
};
