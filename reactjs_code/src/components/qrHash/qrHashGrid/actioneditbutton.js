import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';
import logo from './../../../img/QR_Code.png';
var QRCode = require('qrcode.react');
export function MyCommandCell({ editField, tenant }) {
    return class extends GridCell {
        
        render() {
            const { dataItem } = this.props;
            const inEdit = dataItem[editField];
 
            return inEdit ? null : (<td className="">
                {tenant.qr_hash.qrHashGrid !== null? <QRCode
                            id="12345678"
                            value={tenant.qr_hash.qrHashGrid}
                            size={290}
                            level={"H"}
                            includeMargin={true}
                          /> :<img src={logo} alt="Logo" style={{width:"100%"}}/>}
            </td >
            );
        }
    }
};
