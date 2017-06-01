import React from 'react';

import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';
import {grey500, blueGrey700} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

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


const DownIcon = (props) => (
  <SvgIcon {...props}>
     <path d="M7 14l5-5 5 5z"/>
  </SvgIcon>
);

const UpIcon = (props) => (
  <SvgIcon {...props}>
     <path d="M7 10l5 5 5-5z"/>
  </SvgIcon>
);


const iconStyles = {
  marginRight: -7,
};

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
     deselectOnClickaway: false,
     showCheckboxes: false,
     showTooltip:true,
     selectedRows:[],
     data:this.props.data,
     height: '300px'};
   }


   handleSort = (direction,field) => {
    this.setState(function (state, props) {
      const sortedData = state.data.sort((a,b)=>{return direction === 'up' ? a[field]-b[field] : b[field]-a[field]})
       return {
        data: sortedData
       }
      });
  };


   render() {

    let tableData = this.props.data;

    return (

      (tableData[0] != null) ? 
      <div style={{width: '100%',margin: 'auto'}}>

      <Table
      height={this.state.height}
      fixedHeader={this.state.fixedHeader}
      fixedFooter={this.state.fixedFooter}
      onRowSelection={(selection)=>{this.setState({selectedRows: selection}); this.props.onRowSelect(selection)}}  
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
      <TableHeaderColumn colSpan={Object.keys(tableData[0]).filter((el)=>{return typeof(tableData[0][el])!=='boolean'}).length} style={{textAlign: 'center'}}>
      Company Info
      </TableHeaderColumn>
      </TableRow>
      <TableRow>
      {Object.keys(tableData[0]).map((key)=> { 
        if(typeof(tableData[0][key]) !== "boolean"){
        return (
          <TableHeaderColumn tooltip={key} key={key} style={{height:'25px',padding:'0px', paddingLeft:'10px', textAlign:'center'}}>
           {key.slice(0,6)}
           <span>
           <br/> <DownIcon style={iconStyles} color={grey500} hoverColor={blueGrey700} onClick={()=>{this.handleSort('down',key)}}/>
           <UpIcon style={iconStyles} color={grey500} hoverColor={blueGrey700} onClick={()=>{this.handleSort('up',key)}} />
           </span>
          </TableHeaderColumn>
          )
        }
        })}


        </TableRow>

        </TableHeader>
        <TableBody
        displayRowCheckbox={this.state.showCheckboxes}
        deselectOnClickaway={this.state.deselectOnClickaway}
        showRowHover={this.state.showRowHover}
        stripedRows={this.state.stripedRows}
        >{tableData.map( (row, index) => (
          <TableRow key={index} selected={this.state.selectedRows.indexOf(index) !== -1}>
          {Object.keys(row).map((key)=> { 
            if(typeof(row[key]) !== "boolean"){
            return (                 
            <TableRowColumn  key={key} style={{paddingRight:'10px', paddingLeft:'10px'}} > {row[key]}</TableRowColumn>

            )}

          })}

            </TableRow>
            ))}
            </TableBody>

            </Table>

            </div>

            : <div></div>
            );
          }
        }
