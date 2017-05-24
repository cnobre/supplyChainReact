// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import TableComponent from './TableComponent';
import SimpleMap from './GoogleMap';

const App = () => (

  <MuiThemeProvider>
  <div>
    
    <div style={{width: '800%', height: '400px'}}>
    <SimpleMap/>
  </div>
  <TableComponent/>
    </div>
   </MuiThemeProvider>
  

);



export default App;