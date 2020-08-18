import React, { Component } from 'react';
import NamesContainer from '../components/NamesContainer';
import logo from '../images/logo.svg';

export default class Profile extends Component {
    state = {
      names: [
       'Google classroom' ,
       'Google docs' ,
       'Flip grid' ,
       'Google slides' ,
        'Jupiter' , 
      'Google slides'  ,
       'Remind' 
      ],
      searchTerm: ' '
    }
    editSearchTerm = (e) => {
      this.setState({searchTerm: e.target.value})
    }
    
    dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

     render(){
      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm}/>
          <br></br>
          <h3>These are the important names:</h3>
          <NamesContainer names = {this.dynamicSearch()}/>
        
      );
}