import React from 'react';
import './MaterialButton.css'

class MaterialButton extends React.Component {
  render() {
    return (
        <button
            className={this.props.className || "material-btn"}
            onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
    )
  }
}

export default MaterialButton;