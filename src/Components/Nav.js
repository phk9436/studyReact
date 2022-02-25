import React, { Component } from 'react';

class Nav extends Component {
    render(){
      let lists = [];
      let data = this.props.data;
      for(let i = 0; i<data.length; i++){
        lists.push(<li key={data[i].id}><a href={'/content/'+data[i].id+'.html'}>{data[i].title}</a></li>);
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

export default Nav;