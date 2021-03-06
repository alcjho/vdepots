import React from 'react';

class Contact extends React.Component {
    constructor() {
    super();
    this.state = {
        lang: 'fr',
        firstname: ''
    };
}

handleChange = evt => {
// This triggers everytime the input is changed
    this.setState({
        [evt.target.name]: evt.target.value,
    });
};

handleSubmit = evt => {
    evt.preventDefault();
    lg = this.state.lang;
    //making a post request with the fetch API
    fetch(`/${lang}/editor/component/register`, {
        method: 'POST',
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
             firstName:this.state.firstName
        })
    }) 
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
};

render(){
  return(
    <form onSubmit={this.handleSubmit} >
        <input 
            name="firstName" 
            type="text" 
            id="name" 
            value={this.state.firstName} 
            onChange={this.handleChange}>
        </input>
        <input type="submit"/>
    </form>
    );
  }
}

export default Contact;
