import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import TableComponent from './TableComponent';
import SimpleMap from './GoogleMap';
import GraphApp from './Graph'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AutoCompleteComponent from './AutoCompleteComponent';



import tableData from './companyInfo.json';

const App = () => (

  <MuiThemeProvider>
  <div style={{width: '80%',  margin:'auto'}}>

 <Paper style={{
  margin: '16px 0px 16px 0px',
}} zDepth={2}> 

<div style={{padding:'14px 14px 14px ', margin:'0px' , display:'inline-block', width:'25%'}}>
 <AutoCompleteComponent text='Search by Company Name' values={tableData} field='Company Name'/>
 </div>
 <div style={{padding:'14px 14px 14px', margin:'0px', display:'inline-block', width:'20%'}}>
  <AutoCompleteComponent text='Search by City' values={tableData} field='City'/>
  </div>
  <div style={{padding:'14px 14px 14px', margin:'0px', display:'inline-block', width:'25%'}}>
   <AutoCompleteComponent text='Search by Category' values={tableData} field='Category'/>
</div>

<RaisedButton label="Advanced Search" style={{margin:'12px'}} />
</Paper> 

 <Paper style={{
  margin: '16px 0px 16px 0px',
}} zDepth={2}> 
  <div style={{width: '50%', height: '400px', margin:'auto', display:'inline-block', 'overflow':'visible'}}>
  	<div style={{width: '100%', height: '400px', margin:'auto', display:'inline-block'}}>
    <SimpleMap/>
    </div>
  </div>

  
  <div style={{width: '50%', height: '400px', margin:'auto', display:'inline-block'}}>
  
    <GraphApp />   
  </div>
 

  </Paper>
   
  <TableComponent data={tableData}/>
    </div>
   </MuiThemeProvider>
);

export default App;
