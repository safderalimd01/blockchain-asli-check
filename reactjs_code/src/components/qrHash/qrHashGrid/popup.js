import React from 'react';  
// import './style.css';  
import '../../../css/popup.css'

class Popup extends React.Component {  
  render() {  
  return (  
    <div className='popup'>  
      <div className='popup_inner'>  
        <h1>{this.props.text}</h1>  
        <button onClick={this.props.closePopup}>close me</button>  
      </div>  
    </div>  
  );  
  }  
}  

export default Popup;