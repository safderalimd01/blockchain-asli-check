import React from "react";
// import '../../../css/header.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import '../../../css/addNewQRHash.css';
import { Input } from '@progress/kendo-react-inputs';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import BreadCrum from './../../layouts/breadcrum.js'; 
import { fnQRHashCreateNew, fnQRHashCreateNewAPI} from "../../../actions/qrHashCreateNewAction";
import web3 from '../../../web3';
import product_Abi_address from '../../../ABI_&_Contract_Address';
var sha256 = require('js-sha256');
var QRCode = require('qrcode.react');

class NewQRHashInsert extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      value: new Date(),
      apartment_owner_address_data:[],
      tenant: false,
      label:"New QR Code",
      hash_value:0,
      has_value_generate:false
    };
    if(this.props.location.pathname === "/apartment/grid/edit"){
      this.state.label = "Update"
      this.state.Unit_Number = "101"
      this.state.Floor = "Ground"
    }
    if(this.props.location.pathname === "/all-apartment/grid/add"){
      this.state.apartment = "All Apartments";
      this.state.link = "/all-apartment/grid";
    }else{
      this.state.apartment = "QR Grid";
      this.state.link = "/apartment/grid";
    }
  }
  onClickButton = (event) => {
    if(event === "cancel"){
      this.props.history.push('/qr_hash/grid');
    }
    if(event === "add_new_unit"){
      this.props.history.push("/apartment/new-unit/add");
    }
  }
  onChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    })
  }
  render() {
    return (
      <div>
        <div style={{marginLeft: "45px"}}>
          <br />
          <BreadCrum new_qr_screen = {this.state.tenant} qr_hash_label={this.state.apartment} new_qr_hash_label={this.state.label}/>
        </div>
        <div className="row example-wrapper row_setting">
          
        <div className="col-sm">
            <div className="" style={{ textAlign:"left"}}>
              <div className="card-block">
                <form className="k-form apartment_payment_detail_form"  onSubmit={this.handleSubmit} style={{ color: "#333", backgroundColor:"#FFFFFF" }}>
                  <fieldset  className="fieldset_line">
                    <div className="section__header">
                      <h2 className="section__title">
                        {this.state.label}
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
                        <Input
                          className="input_field"
                          name="Product"
                          style={{ width: "100%" }}
                          label="Product"
                          value={this.state.Product}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      
                      <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
                      <Input
                          className="input_field"
                          name="Product_uns"
                          style={{ width: "100%" }}
                          label="Product_upc"
                          value={this.state.Product_uns}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
                      <Input
                          className="input_field"
                          name="Weight"
                          style={{ width: "100%" }}
                          label="Weight"
                          value={this.state.Weight}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
                      <Input
                          className="input_field"
                          name="Dimensions"
                          style={{ width: "100%" }}
                          label="Dimensions"
                          value={this.state.Dimensions}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
                      <Input
                          className="input_field"
                          name="manufacture_location"
                          style={{ width: "100%" }}
                          label="Manufacture Location"
                          value={this.state.manufacture_location}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
                        <Input
                            className="input_field"
                            name="manufacture_date"
                            style={{ width: "100%" }}
                            label="Manufacture Date"
                            type="date"
                            value={this.state.manufacture_date ? this.state.manufacture_date:new Date()}
                            onChange={this.onChange}
                          />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
                      <Input
                          className="input_field"
                          name="expiry_date"
                          style={{ width: "100%" }}
                          label="Expiry Date"
                          type="date"
                          value={this.state.expiry_date ? this.state.expiry_date:new Date()}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
                        <Input
                          className="input_field"
                          name="Manufacturing_batch_id"
                          style={{ width: "100%" }}
                          label="Batch Id"
                          value={this.state.Manufacturing_batch_id}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 col-sm-12 col-xs-12 xol-lg-4">
                        <div style={{ marginTop:"10px",display:"none"}}>
                          <QRCode
                            id="123456"
                            value={this.state.hash_value}
                            size={290}
                            level={"H"}
                            includeMargin={true}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ float: "right"}}>
                      <div style={{ float: "right", marginTop:"10px"}}>
                        <Button className="button-save-details" >Generate QR</Button>
                        <Button className="button-cancel-details" onClick={() => { this.onClickButton("cancel") }} >Cancel</Button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          {
            this.state.success && (<div className="k-loading-mask">
              <span className="k-loading-text">Loading</span>
              <div className="k-loading-image"></div>
              <div className="k-loading-color"></div>
            </div>)
          }

          {this.state.success && (
            <div
              className="alert alert-success"
              style={{
                position: 'absolute', bottom: 0,
                right: 0, zIndex: 1000,
                backgroundColor: '#fff', width: "300px",
                boxShadow: "2px 5px 15px #999999",
                marginRight: "10px"
              }}
            >
              <div style={{ display: "flex" }}>
                <div className="success_message_circle">
                  <span class="k-icon k-i-check k-i-checkmark check_squre_icon"></span>
                </div>
                <div className="success_message_content_div">
                  <h6 className="success_message_h6">SUCCESS!</h6>
                  <p className="success_message_paragraph">Form Submitted Succesfully</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    );
  }
  
  handleSubmit = async (event) => {
    event.preventDefault();
    
    var hash = sha256.create();
    hash.update(this.state.Product, this.state.Product_uns, this.state.manufacture_location,this.state.manufacture_date, this.state.expiry_date,this.state.expiry_date,"https://www.google.com/");
    var hash_value = hash.hex();
    const account = await web3.eth.personal.getAccounts();
    const new_product = await product_Abi_address.methods.createproduct(hash_value,this.state.Product_uns,this.state.Product, this.state.Weight,this.state.Dimensions,this.state.expiry_date,this.state.manufacture_date,this.state.manufacture_location,this.state.Manufacturing_batch_id)
    .send({
          from:account[0], 
          gas:3000000
        });
    
    this.setState({ success: true, hash_value:hash_value,
      has_value_generate:true });
    //   userData={
    //     product_type :str(data.get('product_type'))
    //     manufacturer_date : str(data.get('manufacturer_date'))
    //     expiry_date = str(data.get('expiry_date'))
    //     manufacturer_location = str(data.get('manufacturer_location'))
    //    batch_id = str(data.get('batch_id'))
    //     urls = str(data.get('url'))
    //   }
    // this.props.fnQRHashCreateNewAPI(userData)
    setTimeout(() => { this.setState({ success: false }); if(this.state.has_value_generate === true){
      const canvas = document.getElementById("123456");
      const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "123456.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink)
      this.props.fnQRHashCreateNew(hash_value,this.state.Product, this.state.Product_uns,this.state.manufacture_location,this.state.manufacture_date, this.state.expiry_date,new_product,this.state.Weight,this.state.Dimensions,this.props.history)
    } }, 3000);
  }
  
}

NewQRHashInsert.propTypes = {
  qr_hash: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  qr_hash: state.qr_hash
});

export default connect(mapStateToProps, { fnQRHashCreateNew, fnQRHashCreateNewAPI }
  )(NewQRHashInsert);