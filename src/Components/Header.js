import React, { Component } from 'react';

class Header extends Component {
    render(){
      return (
        <header>
          <h1><a href='/' onClick={function(e){
              e.preventDefault();
              this.setState({
                mode:'read'
              });
          }.bind(this)}>{this.props.title}</a></h1>
          <p>{this.props.sub}</p>
        </header>
      );
    }
  }

export default Header;