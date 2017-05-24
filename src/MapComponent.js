import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    bmi:20,
    personID:'#12433',
    gender:'F',
    affected:'Y'
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
        bmi:20,
    personID:'#12433',
    gender:'F',
    affected:'Y'
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
        bmi:20,
    personID:'#12433',
    gender:'F',
    affected:'Y'
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
        bmi:20,
    personID:'#12433',
    gender:'F',
    affected:'Y'
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
        bmi:20,
    personID:'#12433',
    gender:'F',
    affected:'Y'
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
        bmi:20,
    personID:'#12433',
    gender:'F',
    affected:'Y'
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
        bmi:20,
    personID:'#12433',
    gender:'F',
    affected:'Y'
  },
];




import FlatButton from 'material-ui/FlatButton';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class MyAwesomeReactComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	open: false,
    finished: false,
    stepIndex: 0,
	fixedHeader: true,
    fixedFooter: false,
    stripedRows: false,
    showRowHover: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '200px'};
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };


  handleMenuToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Load a Dataset';
      case 1:
        return 'Select Variables of Interest';
      case 2:
        return 'Render Table and Genealogy Tree';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }


  render() {

  	const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>

       <RaisedButton
          label="Open Attribute Explorer"
          onTouchTap={this.handleMenuToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Load File</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Preview Variables</MenuItem>
        </Drawer>


        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Load Dataset</StepLabel>
          </Step>
          <Step>
            <StepLabel>Select Attributes</StepLabel>
          </Step>
          <Step>
            <StepLabel>Render Views</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>

            {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>

          <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Attribute Table" style={{textAlign: 'center'}}>
                Attribute Table
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="personID">
               <CardHeader
			      title="PersonID"
			      subtitle="Subtitle"
			    />

			     <svg width={80} height={30}>
        <circle cx={50} cy={20} r={10} fill="red" />
      </svg>
              </TableHeaderColumn>
                  <TableHeaderColumn tooltip="personID">
               <CardHeader
			      title="PersonID"
			      subtitle="Subtitle"
			    />

			     <svg width={80} height={30}>
        <circle cx={50} cy={20} r={10} fill="red" />
      </svg>

              </TableHeaderColumn>
                  <TableHeaderColumn tooltip="personID">
               <CardHeader
			      title="PersonID"
			      subtitle="Subtitle"
			    />

			     <svg width={80} height={30}>
        <circle cx={50} cy={20} r={10} fill="red" />
      </svg>

              </TableHeaderColumn>

            </TableRow>

          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >{tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn> 
                <svg width={80} height={50}>
        <circle cx={50} cy={50} r={10} fill="red" />
      </svg></TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>

          </div>
    );
  }
}
