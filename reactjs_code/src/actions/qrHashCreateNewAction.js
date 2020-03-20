import axios from "axios";
import {
  GET_QR_HASH,
  CLEAR_ERRORS
} from "./types";




export const fnQRHashCreateNew = (userdata, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .get(" http://127.0.0.1:5000/", userdata)
    .then(res => {

      dispatch(setNewQRData(res));
      history.push("/qr_hash/grid")
    })
    .catch(err => { console.log(err) });
};

//GetAllProfile
export const setNewQRData = (CompanyDetails) => {
  return {
    type: GET_QR_HASH,
    payload: CompanyDetails
  };
};
// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

