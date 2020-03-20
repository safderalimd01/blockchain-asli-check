import React from 'react';
import { GridCell } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import Popup from './popup.js';  

export function MyCommandCell2({ editField, tenant }) {
    return class extends GridCell {
        constructor(props){  
            super(props);  
            this.state = { showPopup: false };  
            }  
            
              togglePopup() {  
            this.setState({  
                 showPopup: !this.state.showPopup  
            });  
             } 
        render() {
            const { dataItem } = this.props;
            const inEdit = dataItem[editField];
            
            return inEdit ? null : (<td className="">
                <Button className="button-save-details" onClick={this.togglePopup.bind(this)}>Decode</Button>
                {this.state.showPopup ? 
                <Popup
                    text='Close Me'
                    closePopup={this.togglePopup.bind(this)}
                />
                : null
                }
            </td >
            );
        }
    }
};
