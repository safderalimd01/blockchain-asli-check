import React from 'react';  
// import './style.css';  
import '../../../css/popup.css'
import { Link } from "react-router-dom";
import logo from "./../../../img/Product.png"

class Popup extends React.Component {  
  render() {  
    console.log(this.props)
  return (  
    <div className='popup' >  
      <div className='popup_inner' style={{fontSize:"15px",fontFamily:"Lato"}}>  
      <div style={{margin:"15px"}}>
        <span style={{fontSize:"18px"}}><b> Product Information</b>
        <img src={logo} alt="Empty" style={{height: "35px"}} />
         </span>
      {/* <button onClick={this.props.closePopup}>Product Information</button>  */}
        <Link to="#" style={{float:"right", color:"#215CA0"}} onClick={this.props.closePopup}>Close Me</Link>
      </div>
      <div className="container" style={{textAlign:"justify"}}>
       
        <p style={{margin:"0px"}} >Product Name = {this.props.product}</p> 
        <p style={{margin:"0px"}}>Product UPC = {this.props.product_uns}</p>  
        <p style={{margin:"0px"}}>Weight = {this.props.Weight}</p> 
        <p style={{margin:"0px"}}>Dimension = {this.props.Dimensions}</p> 
        <p style={{margin:"0px"}}>Manufacturing Location = {this.props.manufacture_location}</p>
        <p style={{margin:"0px"}}>Manfacture Date = {this.props.manufacture_date}</p> 
        <p style={{margin:"0px"}}>Expiry Date = {this.props.expiry_date}</p> 
        <p style={{margin:"0px"}}>Manufacturing Batch Id = {this.props.manufacturing_batchid}</p> 
        <p style={{margin:"0px"}}>Hash = {this.props.qrHashGrid}</p> 

      </div>
      </div>  
    </div>  
  );  
  }  
}  

export default Popup;