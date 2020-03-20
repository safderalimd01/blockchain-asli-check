import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';
import logo from './../../../img/QR_Code.png';
export function MyCommandCell({ editField, tenant }) {
    return class extends GridCell {
        render() {
            const { dataItem } = this.props;
            const inEdit = dataItem[editField];
            
            return inEdit ? null : (<td className="">
                <img src={logo} alt="Logo" style={{width:"100%"}}/>
            </td >
            );
        }
    }
};
