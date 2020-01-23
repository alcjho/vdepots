import React, {Component} from 'react';
import config from './conf';

export default class getData extends Component{
    state = {
        moduleData : []
    }

    componentDidMount() {
        fetch(config.module_api_server + 'header')
        .then(res => res.json())
        .then((data) => {
          this.setState({ moduleData: data })
        })
        .catch(console.log)
    }

    render(){
        return this.state.moduleData;
    };
}