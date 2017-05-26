import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

var PropTypes = require('prop-types');

export default class AutoCompleteComponent extends React.Component {

  state = {
    searchText: '',
  };

handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };

 possibleValues = [...new Set(this.props.values.map((value)=>{return value[this.props.field]}))]
  
  render() {
    return (
        <AutoComplete
          hintText={this.props.text}
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          dataSource={this.possibleValues}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
          fullWidth={true}
        />
    );
  }
}


AutoCompleteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired
}

AutoCompleteComponent.defaultProps = {
  text: 'Search',
    zoom: []
}
