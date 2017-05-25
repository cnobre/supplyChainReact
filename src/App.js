import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import TableComponent from './TableComponent';
import SimpleMap from './GoogleMap';
import GraphApp from './Graph'

import tableData from './companyInfo.json';

const App = () => (

  <MuiThemeProvider>
  <div style={{width: '80%',  margin:'auto'}}>
 
  <div style={{width: '50%', height: '400px', margin:'auto', display:'inline-block'}}>
    <GraphApp />
  </div>

    <div style={{width: '50%', height: '400px', margin:'auto', display:'inline-block'}}>
    <SimpleMap/>
  </div>

  <TableComponent data={tableData}/>
    </div>
   </MuiThemeProvider>
);

export default App;
