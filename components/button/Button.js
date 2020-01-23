import React from 'react';

class Button extends React.Component { 
    state={
        style : this.props.style,
        lang : "fr"
    }

    

    render(){
        return(
            <div className="component">
                <div className="show-props"><i className="fa fa-wrench fa-2x"></i></div>
                <button id={`button_`+this.props.id} name={`button_`+this.props.id}>Simple button</button>
                <style jsx>
            {`
                button{
                    
                }
            `}
            </style>                    
            </div>
      
        );
    }
}

export default Button;