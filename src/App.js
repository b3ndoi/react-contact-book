import React, { Component } from 'react';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Menager"/>

        <div className="container">
          <Contact user={
            {name:'Luka',email:'test@test.com', phone:'+39154678645'}}/>
          <Contact user={
            {name:'Luka',email:'test@test.com', phone:'+39154678645'}}/>
        </div>
      </div>
    );
  }
}

export default App;
