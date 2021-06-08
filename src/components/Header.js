import React from 'react';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
        <header>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </header>
    )
  }
}

export default Header;