import {ActionTypes} from '../action';

const initialState = {
  filters: ['all'],
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

      default:
        return state;
    }
  } catch (error) {
    console.log('error in launches reducer', error);
  }
};
