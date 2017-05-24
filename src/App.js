import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import TableComponent from './TableComponent';
import SimpleMap from './GoogleMap';

const App = () => (

  <MuiThemeProvider>
  <div>
    
    <div style={{width: '80%', height: '400px', margin:'auto'}}>
    <SimpleMap/>
  </div>
  <TableComponent/>
    </div>
   </MuiThemeProvider>
  

);

export default App;
