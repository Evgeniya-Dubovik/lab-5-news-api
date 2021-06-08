import React from 'react';
import './MaterialEdit.css'

class MaterialEdit extends React.Component {
  render() {
    return (
        <input type="text"
               name="search"
               className="search-edit"
               placeholder={this.props.placeholder}
               value={this.props.value}
               onChange={this.props.onChange}
               onKeyUp={this.props.onKeyUp}
        />
    )
  }
}

export default MaterialEdit;