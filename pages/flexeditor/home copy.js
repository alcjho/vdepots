import React from 'react';
import Layout from '../../components/flex/Layout';
import * as Components from '../../components';
import Null from '../../components/Null';


class Index extends React.Component { 
    state={
        selectedComponent: ''
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

    renderComponentSelector(){
        return (
            <div className="row">
                <div className="col-sm-3 left-menu">
                    <div className="row">
                        <label className="col-sm-12"><h3>Modules</h3></label>
                        <select className="col-sm-12 form-control" 
                        onChange = { (e) => {this.setState({selectedComponent: e.target.value})}}>
                            <option value="">Pick from the list</option>
                            <option>Button</option>
                            <option>Form</option>
                            <option>Footer</option>
                            <option>Header</option>
                        </select>                       
                    </div>

                    <div className="row">
                        <label className="col-sm-12">widget name:</label>
                        <input className="col-sm-12" placeholder="Nom du widget"/>
                        
                        <label className="col-sm-12">Column</label>
                        <select className="col-sm-3 form-control">
                            <option value="">phone</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>

                        <select className="col-sm-3 form-control">
                            <option value="">Tablet</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>

                       <select className="col-sm-3 form-control">
                            <option value="">Desktop</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>

                       <select className="col-sm-3 form-control">
                            <option value="">Fullwidth</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>                

                </div>
                <div className="col-sm-7 flex-view">
                    {this.renderSelectedComponent(this.state.selectedComponent)}
                    <div className="container_edit"></div>
                    <div className="row_edit"></div>
                    
                </div>
                <div className="col-sm-2 right-menu">
                </div>                
            </div>        
        )
    }
    
    renderSelectedComponent(selectedComponent){
        if(!selectedComponent){
            return <Null />
        }else{
            const Component = Components[selectedComponent]
            return <Component id='12345'/>;
        }
    }


    renderRowProperties(id, name){
        return(
            <div className="row" id={data + '_' + id}>
                <div className="row_edit"></div>
            </div>
        )
    }

    renderColProperties(id, row){
        return(
            <div className="col-sm-12" id={data + '_' + id}>
                <div className="col_edit"></div>
            </div>
        )
    }
    
    renderComponentStyle(){

    }      

}

export default Index;
