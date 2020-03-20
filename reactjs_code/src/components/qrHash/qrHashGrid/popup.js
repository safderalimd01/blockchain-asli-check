import React from 'react';  
// import './style.css';  
import '../../../css/popup.css'

class Popup extends React.Component {  
  render() {  
    
  return (  
    <div className='popup'>  
      <div className='popup_inner'>  
      <div className="container" style={{marginTop:"50px"}}>
        <h5 style={{marginBottom:"10x"}}>Hash:{this.props.qrHashGrid}</h5> 
        
        <h5 style={{marginBottom:"10x"}}>Product: {this.props.product}</h5> 
        <h5 style={{marginBottom:"10x"}}>Manufacturer: {this.props.Manufacturer}</h5>  
        <h5>Location:{this.props.manufacture_location}</h5> 
        <h5>Weight: {this.props.Weight}</h5> 
        <h5>Dimensions: {this.props.Dimensions}</h5> 
        <h5>Manufacture Date: {this.props.manufacture_date}</h5> 
        <h5>Expiry Date: {this.props.expiry_date}</h5> 
        <button style={{float:"right", marginTop:"50px"}} onClick={this.props.closePopup}>close me</button> 
      </div>
      </div>  
    </div>  
  );  
  }  
}  

export default Popup;