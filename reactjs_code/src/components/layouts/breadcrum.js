import React from 'react';  
import '../../css/qrHashGrid.css';
import { Link } from "react-router-dom";
// import logo from "./../../img/home.png";

class BreadCrum extends React.Component {  
  render() {  
  return (  
    <div style={{ textAlign: "left", fontSize: "12px", color: "black" }}>
        <Link className="link_tag" to=""><span className="k-icon k-i-pencils">
          {/* <img src={logo} alt="Empty"/> */}H
          </span></Link>
        <Link className="link_tag_2" to="/qr_hash/grid"><span> {this.props['qr_hash_label']}</span><span className="link_tag_2_curve"></span></Link>
        {this.props['new_qr_screen'] === true ? null: 
          <Link className="link_tag_3" to="/qr_hash/grid/add"><span>  {this.props['new_qr_hash_label']}</span><span className="link_tag_3_curve"></span></Link>
        }
      </div>
  );  
  }  
}  

export default BreadCrum;