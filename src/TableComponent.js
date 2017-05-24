import React from 'react';
import tableData from './companyInfo.json';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class TableComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  	  fixedHeader: true,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: false,
      showTooltip:true,
      height: '200px'};
  }


  render() {

    return (
      <div style={{width: '100%', maxWidth: 1000, margin: 'auto'}}>

            <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          bodyStyle={{overflow:'scroll'}}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan={Object.keys(tableData[0]).length} tooltip="Attribute Table" style={{textAlign: 'center'}}>
                Company Info
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
            {Object.keys(tableData[0]).map((key)=> { 
                return (
              <TableHeaderColumn tooltip={key} key={key} style={{width:'50px', paddingLeft:'10px'}}>
              {key}</TableHeaderColumn>
          )
      })}
              

            </TableRow>

          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >{tableData.map( (row, index) => (
              <TableRow key={index}>

              {Object.keys(row).map((key)=> { 
                return (

                <TableRowColumn key={key} style={{paddingRight:'10px', paddingLeft:'10px'}} >
    
                {row[key]}</TableRowColumn>

          )
      })}
              
              </TableRow>
              ))}
          </TableBody>
  
        </Table>

          </div>
    );
  }
}
