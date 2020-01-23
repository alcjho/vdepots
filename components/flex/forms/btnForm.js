import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBDropdown, MDBBtn } from 'mdbreact';

class ButtonForm extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            id: props.id,
            wtype: props.data.wtype,
            caption: props.data.caption,
            width: props.data.style.width,
            height: props.data.style.height,
            color: props.data.style.color,
            bgColor: props.data.style.bgColor,
            border: props.data.style.border,
            borderSize: props.data.style.borderSize,
            borderColor: props.data.style.borderColor,
            borderRadius: props.data.style.borderRadius,
            onClick: props.data.onClick,
            onHover: props.data.onHover,
            hoverStyle: props.data.hoverStyle,
        }  
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        console.log(this.state);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevState);
    }
    static getDerivedStateFromProps(nextProps, state) {
        var newState = {};
        if (nextProps.data !== state) {
            newState.id = nextProps.data.id;
            newState.wtype = nextProps.data.wtype;
            newState.caption = nextProps.data.caption;
            newState.width = nextProps.data.style.width;
            newState.height = nextProps.data.style.height;
            newState.color = nextProps.data.style.color;
            newState.bgColor = nextProps.data.style.bgColor;
            newState.border = nextProps.data.style.border;
            newState.borderColor = nextProps.data.style.border;
            newState.borderSize = nextProps.data.style.borderSize;
            newState.borderRadius = nextProps.data.style.borderRadius;
            newState.onClick = nextProps.data.style.onClick;
            newState.onHover = nextProps.data.style.onHover;
            newState.hoverStyle = nextProps.data.style.hoverStyle;

           return newState;
        }
        return null;
    }

    handleChange = e =>{
        this.setState({[e.target.name] : e.target.value})
    }


    render() {
        return (
            <MDBRow>
                <MDBCol md="12">
                <form name="button-form" method="post" onSubmit={this.update}>
                    <br />
                    <p className="h4 mb-4"> {this.state.wtype} properties</p>
                    <hr />
                    <MDBRow>
                        <MDBCol md="12">
                            <label htmlFor="caption" className="grey-text">Caption:</label>                        
                            <input ref="" type="text" name="caption" value={this.state.caption} id="width" className="form-control" onChange={this.handleChange}/>
                        </MDBCol>
                        <MDBCol md="6">                            
                            <label htmlFor="width" className="grey-text">Width:</label>                        
                            <input ref="" value={this.state.width} type="text" name="width" id="width" className="form-control" onChange={this.handleChange}/>
                        </MDBCol>
                        <MDBCol md="6">
                            <label htmlFor="textcolor" className="grey-text">Height :</label>
                            <input ref="" type="text" name="height" value={this.state.height} className="form-control" onChange={this.handleChange}/>
                        </MDBCol>
                        <MDBCol md="6">
                            <label htmlFor="color" style={{marginTop:10}} className="grey-text">Color:</label>
                            <input ref="" type="text" name="color" value={this.state.color} className="form-control" onChange={this.handleChange}/>
                        </MDBCol>
                        <MDBCol md="6">
                            <label htmlFor="bgColor" style={{marginTop:10}} className="grey-text">Bgcolor:</label>
                            <input ref="" type="text" name="bgColor" value={this.state.bgColor} className="form-control" onChange={this.handleChange}/>
                        </MDBCol>                   
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <label htmlFor="border" style={{marginTop:10}} className="grey-text">Border:</label>                        
                            <select ref="" name="border" value={this.state.border} className="form-control" onChange={this.handleChange}>
                                <option >Yes</option>
                                <option >No</option>
                            </select>
                        </MDBCol>
                        <MDBCol md="6">
                            <label htmlFor="borderColor" style={{marginTop:10}} className="grey-text">border-color:</label>
                            <input ref="" type="text" name="borderColor" value={this.state.borderColor}  className="form-control" onChange={this.handleChange}/>
                        </MDBCol>
                        <MDBCol md="6">
                            <label htmlFor="borderSize" style={{marginTop:10}} className="grey-text">Border-size:</label>
                            <input ref="" type="text" name="borderSize" value={this.state.borderSize}  className="form-control" onChange={this.handleChange}/>
                        </MDBCol>
                        <MDBCol md="6">
                            <label htmlFor="borderRadius" style={{marginTop:10}} className="grey-text">Border-radius:</label>
                            <input ref="" type="text" name="BorderRadius" value={this.state.borderRadius} className="form-control" onChange={this.handleChange}/>
                        </MDBCol>                   
                    </MDBRow>

                    <br />
                    <p className="h4 mb-4"> {this.state.wtype} Actions </p>
                    <hr />
                    <MDBRow style={{height:'auto'}}>
                        <MDBCol md="12" >
                            <label htmlFor="events" style={{marginTop:10, fontWeight:'bold'}} className="grey-text">On Click:</label>
                            <select ref="" name="onClick" value={this.state.onClick} className="form-control" onChange={this.handleChange}>
                                <option value="submit">Submit Parent Form</option>
                                <option value="closew">Close this Window</option>
                                <option value="rmctrl">Remove a control</option>
                                <option value="runsql">Run SQL query</option>
                            </select>

                            <hr style={{marginBottom:0}} />

                            <label htmlFor="events" style={{marginTop:20, fontWeight:'bold'}} className="grey-text">On Hover:</label>
                            <select ref="" name="onHover" value={this.state.onHover} className="form-control" onChange={this.handleChange}>
                                <option value="newstyle">Change button style</option>
                            </select>
                            <label htmlFor="events" style={{marginTop:10}} className="grey-text">Re-style:</label>                                                              
                            <textarea ref="" className="col-sm-12 form-control" value={this.state.hoverStyle}  rows="5" placeholder="eg. border-color: #eeeeee, color:#999999" name="hoverStyle" onChange={this.handleChange}>
                            </textarea>
                            <hr />
                            <button className="btn btn-primary" type="submit">Apply</button>                       
                        </MDBCol>      
                    </MDBRow>
                </form>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default ButtonForm;