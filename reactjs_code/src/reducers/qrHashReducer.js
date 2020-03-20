import {
  GET_QR_HASH,
  QR_HASH_LOADING
} from "../actions/types";

const initialState = {
  qrHashGrid: null,
  product:null,
  Manufacturer:null,
  manufacture_location: null,
  manufacture_date:null,
  expiry_date:null,
  new_product_data:[],
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
        qrHashGrid: action.payload,
        product:action.detail,
        Manufacturer:action.Manufacturer,
        manufacture_location: action.manufacture_location,
        manufacture_date:action.manufacture_date,
        expiry_date:action.expiry_date,
        new_product_data:action.create_product_data,
        loading: true
      };
    default:
      return state;
  }
}
