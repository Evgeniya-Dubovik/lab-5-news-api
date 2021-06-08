import React from 'react';
import './SearchBar.css'
import MaterialButton from "./MaterialButton";
import MaterialEdit from "./MaterialEdit";

class SearchBar extends React.Component {
  render() {
    return (
        <div className="search-wrapper">
          <MaterialEdit
              placeholder='Find'
              value={this.props.value}
              onChange={this.props.onChange}
              onKeyUp={this.props.onKeyUp}
          />
          <MaterialButton onClick={this.props.onClick}>
            FIND
          </MaterialButton>
        </div>
    )
  }
}

export default SearchBar;