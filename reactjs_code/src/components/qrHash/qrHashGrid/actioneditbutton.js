import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';
var QRCode = require('qrcode.react');
export function MyCommandCell({ editField, tenant }) {
    return class extends GridCell {
        
        render() {
            const { dataItem } = this.props;
            const inEdit = dataItem[editField];
            var products = "Product Name = " + dataItem.product_name +", Product UPC = " + dataItem.product_uns+", Weight = " + dataItem.weight+", Dimension = " + dataItem.packing_dimension+", Manufacturing Location = " + dataItem.manufacturing_location+", Manfacture Date = " + dataItem.manufacturing_date+", Expiry Date = " + dataItem.expiry_date + ", Hash = " +dataItem.product_hash
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
