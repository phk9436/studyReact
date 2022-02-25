import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Article from './Components/Article';
import Nav from './Components/Nav';
import Header from './Components/Header';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      mode: 'welcome',
      header:{
        title:'WEB', 
        sub:'World Wide Web!'
      },
      welcome:{
        title:'Welcome',
        desc: 'Hello, React!!'
      },
      contents:[
        {id:1, title:'HTML', desc:'HTML is for Information'},
        {id:2, title:'CSS', desc:'CSS is for Design'},
        {id:3, title:'JavaScrpt', desc:'Javascript is for interactive'}
      ]
    }
  }

  render(){
    let _title, _desc;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        {/*<Header title={this.state.header.title} sub={this.state.header.sub}></Header>*/}
        <header>
          <h1><a href='/' onClick={function(e){
              e.preventDefault();
              this.setState({
                mode:'read'
              });
          }.bind(this)}>{this.state.header.title}</a></h1>
          <p>{this.state.header.sub}</p>
        </header>
        <Nav data={this.state.contents}></Nav>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

export default App;
