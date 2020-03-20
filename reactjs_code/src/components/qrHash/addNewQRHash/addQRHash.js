import React from "react";
// import '../../../css/header.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import '../../../css/addNewQRHash.css';
import { Input } from '@progress/kendo-react-inputs';
// import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import BreadCrum from './../../layouts/breadcrum.js'; 
import { fnQRHashCreateNew } from "../../../actions/qrHashCreateNewAction";
class NewQRHashInsert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      value: new Date(),
      apartment_owner_address_data:[],
      tenant: false,
      label:"New QR Code"
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
                          name="Manufacturer"
                          style={{ width: "100%" }}
                          label="Manufacturer"
                          value={this.state.Manufacturer}
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
                          name="batch_id"
                          style={{ width: "100%" }}
                          label="Batch Id"
                          value={this.state.batch_id}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    
                    
                    <div className="row">
                      <div className="col-md-4 col-sm-12 col-xs-12 xol-lg-4">
                        <div style={{ marginTop:"10px"}}>
                          {/* <Button className="button-save-details" onClick={() => { this.onClickButton("add_new_unit") }}>Add Unit</Button> */}
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
    var userData={
      product_type: "sysadmin@tss_demo03",
      manufacturer_date: "sysadmin1803",
      expiry_date: "sysadmin@tss_demo03",
      manufacturer_location: "sysadmin1803",
      batch_id: "sysadmin@tss_demo03",
      url: "sysadmin1803"
    }

    this.props.fnQRHashCreateNew(userData,this.props.history)
    this.setState({ success: true,  });
    setTimeout(() => { this.setState({ success: false });  }, 3000);
  }
}
// export default NewQRHashInsert;
NewQRHashInsert.propTypes = {
  apartments: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  qr_hash: state.apartment
});

export default connect(mapStateToProps, { fnQRHashCreateNew }
  )(NewQRHashInsert);