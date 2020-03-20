import { combineReducers } from "redux";
import qrHashReducer from "./qrHashReducer";


export default combineReducers({
  qr_hash: qrHashReducer
});
