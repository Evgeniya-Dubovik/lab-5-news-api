import React from 'react';
import './MoreButton.css'
import MaterialButton from "./MaterialButton";

class MoreButton extends React.Component {
  render() {
    return (
        <MaterialButton
            className="load-more-btn"
            onClick={this.props.onClick}
        >
          LOAD <br/> MORE
        </MaterialButton>
    )
  }
}

export default MoreButton;