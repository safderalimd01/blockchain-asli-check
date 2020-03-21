import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';
var QRCode = require('qrcode.react');
export function MyCommandCell({ editField, tenant }) {
    return class extends GridCell {
        
        render() {
            const { dataItem } = this.props;
            const inEdit = dataItem[editField];
            var products = dataItem.product_hash +"," + dataItem.product_name +"," + dataItem.product_uns+"," + dataItem.weight+"," + dataItem.packing_dimension+"," + dataItem.manufacturing_location+"," + dataItem.manufacturing_date+"," + dataItem.expiry_date
            return inEdit ? null : (<td className="">
                <QRCode
                            id={dataItem.id}
                            value={products}
                            size={290}
                            level={"H"}
                            includeMargin={true}
                          />
                
            </td >
            );
        }
    }
};
