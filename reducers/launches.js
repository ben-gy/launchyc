import {ActionTypes} from '../action';

const initialState = {
  filters: [],
  readHits: [],
};

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

      case ActionTypes.READ_HIT:
        return {
          ...state,
          readHits:
            state.readHits.indexOf(action.payload) === -1
              ? [...state.readHits, action.payload]
              : state.readHits,
        };

      case ActionTypes.CLEAR_FILTER:
        return {
          ...state,
          filters: [],
        };

      case ActionTypes.APPLY_FILTER:
        return {
          ...state,
          filters: [action.payload],
        }

      default:
        return state;
    }
  } catch (error) {
    console.log('error in launches reducer', error);
  }
};
