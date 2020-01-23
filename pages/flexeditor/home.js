import React from 'react';
import Layout from '../../components/flex/Layout';
import * as Components from '../../server/components/';
import Null from '../../components/Null';
import ButtonForm from '../../components/flex/forms/btnForm';
import fetch from 'isomorphic-fetch';

class Index extends React.Component { 
    constructor(props){
        super(props);
        this.child = React.createRef();
        this.state={
            name: '',
            caption:'',
            onClick: '',
            onHover: '',
            hoverStyle:'',
            selectedType: '',
            selected:'',
            selectedComponent:'',
            lg : 'fr',
            description:'',
            code: '',
            childForm: ''
        };

        this.state = {result: []};
        this.getData = this.getData.bind(this);
        this.state.style = {};
    };    

    getData = (e) =>{
        fetch(`/fr/editor/component/button/`+e.target.id, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({childForm: data.response[0]});
       })
        .catch(error => console.log())      
    }


    render(){
        return(
            <div>
                <Layout>
                    {this.renderComponentSelector()}
                </Layout>
            </div>          
        );
    }

    onChange = e => {
        this.setState({...this.state.style, [e.target.name] : e.target.value});
    };

    getComponentData(type){
        fetch(`/${this.state.lg}/editor/component/all/${type}`, {
             method: 'GET'
         })
         .then(response => response.json())
         .then(data => {
             var resp = [];
             var arr = data.response;
        
             Object.keys(arr).map(function(key, idx){
                 
                resp[arr[idx].id] = arr[idx];
             })
             
             this.setState({result: resp})
        })
         .catch(error => console.log())
     }


     renderComponents(result,event){
        if(!Object.keys(result).length){
            return <Null />
        }else{
            return(
                Object.keys(result).map(function(key) {
                    const Component = Components[result[key].wtype]
                    return (
                        <div className="cmpWrapper" key={'wrapper_'+result[key].id}>
                            <Component  id={result[key].id} data={result[key]} onSelect={event}/>
                        </div>
                    )  
                })
 
            )
        }
    }

     getComponentForm(cmpid, data){
        if(this.state.childForm){
            var type = this.state.selectedType
            switch(type){
                case 'Button':
                {
                    return (
                        <ButtonForm 
                            type={type} 
                            cmpid={cmpid}
                            data={this.state.childForm}
                        />
                    )
                }
            }
        }
    }

    renderComponentSelector(){
        return (
            <div className="row">              
                <div className="col-sm-3 left-menu">
                    <form name="add_component_form" method="POST" onSubmit={this.register}>
                        <div className="row">
                            <label className="col-sm-12"><h3>widget type: </h3></label>
                            <select className="col-sm-12 form-control" onChange={(e) => {this.setState({selectedType: e.target.value}); this.getComponentData(e.target.value)}}>
                                <option value="">Pick from the list</option>
                                <option>Button</option>
                                <option>Form</option>
                                <option>Footer</option>
                                <option>Header</option>
                            </select>
                            
                            <label className="col-sm-12"><h3>widget name: </h3></label>
                            <input className="col-sm-12 form-control" placeholder="no space / no special chars" name="cmpname" type="text" onBlur = {(e) => { this.setState({name: e.target.value}) }}/>
                            <label className="col-sm-12"><h3>widget text: </h3></label>
                            <input className="col-sm-12 form-control" placeholder="Diplay text" name="caption" type="text" onBlur = {(e) => { this.setState({caption: e.target.value}) }}/>                            
                            <label className="col-sm-12"><h3>widget code: </h3></label>
                            <input className="col-sm-12 form-control" placeholder="e.g. /server/component/button/button1.js" name="code" type="text" onBlur = {(e) => { this.setState({code: e.target.value}) }}/>                     
                            <label className="col-sm-12"><h3>description: </h3></label>
                            <textarea 
                                className="col-sm-12 form-control" 
                                rows="5" name="description" 
                                type="text" 
                                onBlur = {(e) => { this.setState({description: e.target.value}) }}
                            >
                            </textarea>                                       
                        </div> 
                        <button className="btn btn-primary" type="submit">Create widget</button>
                    </form>
                </div>
                

                <div className="col-sm-7 flex-view">
                    {this.renderComponents(this.state.result, this.getData)}
                    <div className="container_edit"></div>
                    <div className="row_edit"></div>
                </div>
                

                <div className="col-sm-2 right-menu">
                    <div className="row">
                            <div className="col-12">
                                {this.getComponentForm(this.state.selected, this.state.childForm)}
                            </div>
                        </div>
                    </div>  
                <style jsx>
                {`
                    label {
                        margin-top: 40px;
                    }
                    
                    .btn[type=submit]{
                        margin-top:20px;
                        float:right;
                    }
                `}
                </style>              
            </div>        
        )
    }    


 

    /**
     * 
     * @param {*} type
     * @desc register new widget to the database. 
     */
    register = e =>{
        e.preventDefault();
        switch(this.state.selectedType){
            case 'Button':
            {   
                fetch(`/${this.state.lg}/editor/component/register/button`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(this.state)
                }) 
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error)) 
            }          
            
            break;

            case 'Form':
            {
                fetch(`/${this.state.lg}/editor/component/register/form`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(post)
                }) 
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))                
            }
            break;
            
            case 'Link':
            {
                fetch(`/${this.state.lg}/editor/component/register/link`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(post)
                }) 
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))                
            }
            break; 
            
            case 'Table':
            {
                fetch(`/${this.state.lg}/editor/component/register/table`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(post)
                }) 
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))                
            }
            break;
            
            case 'List':
            {
                fetch(`/${this.state.lg}/editor/component/register/list`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(post)
                }) 
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))                
            }
            
            case 'Menu':
            {
                fetch(`/${this.state.lg}/editor/component/register/menu`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(post)
                }) 
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))                
            }            
        }
    }
}

export default Index;