import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import TableComponent from './TableComponent';
import SimpleMap from './GoogleMap';
import GraphApp from './Graph'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';



import tableData from './companyInfo.json';

const App = () => (

  <MuiThemeProvider>
  <div style={{width: '80%',  margin:'auto'}}>


 <Paper style={{
  margin: '16px 0px 16px 0px',
}}> 
  <div style={{width: '50%', height: '400px', margin:'auto', display:'inline-block', 'overflow':'visible'}}>

  	<div style={{width: '200%', height: '400px', margin:'auto', display:'inline-block'}}>
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
