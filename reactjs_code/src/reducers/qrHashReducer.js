import {
  GET_QR_HASH,
  QR_HASH_LOADING
} from "../actions/types";

const initialState = {
  qrHashGrid: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case QR_HASH_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_QR_HASH:
      return {
        ...state,
        qrHashGrid: action.payload.data,
        loading: true
      };
    default:
      return state;
  }
}
