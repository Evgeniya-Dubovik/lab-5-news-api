import React from 'react';
import './Sources.css'
import SourceItem from "./SourceItem";

class Sources extends React.Component {
  render() {
    return (
        <nav
            className="sources-container"
            onClick={this.props.onClick}
        >
          {this.props.sources.map(s => SourceItem(s))}
        </nav>
    )
  }
}

export default Sources;