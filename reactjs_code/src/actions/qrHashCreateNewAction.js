// import axios from "axios";
import {
  GET_QR_HASH,
  GET_QR_HASH_PRODUCT_DATA,
  CLEAR_ERRORS
} from "./types";




export const fnQRHashCreateNew = (userdata, product,Manufacturer,manufacture_location,manufacture_date, expiry_date, create_product_data,Weight,Dimensions,history) => dispatch => {
  dispatch(clearErrors());
  dispatch(setNewQRData(userdata, product, Manufacturer, manufacture_location,manufacture_date, expiry_date, create_product_data,Weight,Dimensions,));
  history.push("/qr_hash/grid")
};

export const fnQRHashCreateNewAPI = (userdata, product,Manufacturer,manufacture_location,manufacture_date, expiry_date, create_product_data,Weight,Dimensions,history) => dispatch => {
  dispatch(clearErrors());
  dispatch(setNewQRCreateData(userdata));
  history.push("/qr_hash/grid")
};

//GetAllProfile
export const setNewQRData = (CompanyDetails,product, Manufacturer, manufacture_location,manufacture_date, expiry_date, create_product_data, Weight,Dimensions) => {
  return {
    type: GET_QR_HASH,
    payload: CompanyDetails,
    detail:product,
    Manufacturer:Manufacturer,
    manufacture_location: manufacture_location,
    manufacture_date:manufacture_date,
    expiry_date:expiry_date,
    new_product_data:create_product_data,
    Weight:Weight,
    Dimensions:Dimensions
  };
};

export const setNewQRCreateData = (ProductData) => {
  return {
    type: GET_QR_HASH_PRODUCT_DATA,
    payload: ProductData
  };
};
// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

