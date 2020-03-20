import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';
import logo from './../../../img/QR_Code.png';
var QRCode = require('qrcode.react');
export function MyCommandCell({ editField, tenant }) {
    return class extends GridCell {
        
        render() {
            const { dataItem } = this.props;
            const inEdit = dataItem[editField];
            var products = tenant.qr_hash.qrHashGrid +"," + tenant.qr_hash.product +"," + tenant.qr_hash.Manufacturer+"," + tenant.qr_hash.manufacture_location+"," + tenant.qr_hash.manufacture_date+"," + tenant.qr_hash.expiry_date
            return inEdit ? null : (<td className="">
                {tenant.qr_hash.qrHashGrid !== null? <QRCode
                            id="12345678"
                            value={products}
                            size={290}
                            level={"H"}
                            includeMargin={true}
                          /> :<img src={logo} alt="Logo" style={{width:"100%"}}/>}
            </td >
            );
        }
    }
};
