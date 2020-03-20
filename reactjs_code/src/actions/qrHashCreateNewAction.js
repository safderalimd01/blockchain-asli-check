// import axios from "axios";
import {
  GET_QR_HASH,
  CLEAR_ERRORS
} from "./types";




export const fnQRHashCreateNew = (userdata, product, history) => dispatch => {
  dispatch(clearErrors());
  dispatch(setNewQRData(userdata, product));
  history.push("/qr_hash/grid")
};

//GetAllProfile
export const setNewQRData = (CompanyDetails,product) => {
  return {
    type: GET_QR_HASH,
    payload: CompanyDetails,
    detail:product
  };
};
// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

