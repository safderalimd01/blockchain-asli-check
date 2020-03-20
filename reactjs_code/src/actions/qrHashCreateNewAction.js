// import axios from "axios";
import {
  GET_QR_HASH,
  CLEAR_ERRORS
} from "./types";




export const fnQRHashCreateNew = (userdata, product,Manufacturer,manufacture_location,manufacture_date, expiry_date, create_product_data,history) => dispatch => {
  dispatch(clearErrors());
  dispatch(setNewQRData(userdata, product, Manufacturer, manufacture_location,manufacture_date, expiry_date, create_product_data));
  history.push("/qr_hash/grid")
};

//GetAllProfile
export const setNewQRData = (CompanyDetails,product, Manufacturer, manufacture_location,manufacture_date, expiry_date, create_product_data) => {
  return {
    type: GET_QR_HASH,
    payload: CompanyDetails,
    detail:product,
    Manufacturer:Manufacturer,
    manufacture_location: manufacture_location,
    manufacture_date:manufacture_date,
    expiry_date:expiry_date,
    new_product_data:create_product_data
  };
};
// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

