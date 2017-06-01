import React from 'react';
import TableComponent from './TableComponent';
import SimpleMap from './GoogleMap';
import GraphApp from './Graph'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AutoCompleteComponent from './AutoCompleteComponent';

import MenuComponent from './MenuComponent'

import tableData from './companyInfo.json';

{/*
import ToolbarComponent from './ToolbarComponent';
import TabComponent from './TabComponent';
*/}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class AppWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleTableSelection = this.handleTableSelection.bind(this);
    this.state = {
      allData:tableData.map((el)=>{el.selected = false; return el}),
      filteredData: tableData.map((el)=>{el.selected = false; return el}),
      name:'',
      city:'',
      category:'',
      selectedCompany:null
    };
  }

  handleTableSelection = (selectedCompany) =>{
    this.setState(function (state, props) {
      if (selectedCompany.length>0){
        state.filteredData[selectedCompany[0]].selected = true;
      }
      console.log('setting selected state')
    
       return {
        filteredData: state.filteredData
       }
      });
  };

  handleChange = (value,field) => {
    this.setState(function (state, props) {
      const possibleValues = tableData.filter((rowItem)=>{return rowItem[field] === value})
       {/*filteredData: possibleValues.length>0 ? possibleValues : tableData,*/}
       return {
        filteredData: value ? possibleValues : tableData
       }
      });
  };


  render() {
    return (

      <div style={{width: '80%',  margin:'auto'}}>

        <Paper style={{margin: '16px 0px 16px 0px'}} zDepth={1}> 

        <div style={{padding:'14px 14px 14px ', margin:'0px' , display:'inline-block', width:'25%'}}>
          <AutoCompleteComponent text='Search by Company Name' values={tableData} field='Company Name' tag = 'name' onSelect={this.handleChange}/>
        </div>
        <div style={{padding:'14px 14px 14px', margin:'0px', display:'inline-block', width:'20%'}}>
          <AutoCompleteComponent text='Search by City' values={tableData} field='City' tag = 'city' onSelect={this.handleChange}/>
        </div>
        <div style={{padding:'14px 14px 14px', margin:'0px', display:'inline-block', width:'25%'}}>
          <AutoCompleteComponent text='Search by Category' values={tableData} field='Category' tag = 'category' onSelect={this.handleChange}/>
        </div>

        <RaisedButton label="Advanced Search" style={{margin:'12px'}} />
        </Paper> 

        {/*
          <ToolbarComponent data={tableData}/>
          <TabComponent/>
        */}

        <Paper style={{ margin: '16px 0px 16px 0px'}} zDepth={2}> 
          
          <div style={{width: '65%', height: '400px', margin:'auto', display:'inline-block', 'overflow':'visible'}}>
            <div style={{width: '100%', height: '400px', margin:'auto', display:'inline-block'}}>
              <SimpleMap/>
            </div>
          </div>

          <div className='graphDIV' style={{width: '35%', height: '400px', margin:'auto', display:'inline-block'}}>
            <GraphApp data={this.state.filteredData} nodeSizeField='Employees Dec 2017'/>   
          </div>

        </Paper>

          <TableComponent data={this.state.filteredData} onRowSelect={this.handleTableSelection}/>
      </div>


      );
  }
}