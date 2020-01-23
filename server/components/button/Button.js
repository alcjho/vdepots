import React from 'react';

class Button extends React.Component { 
    state={
        style : this.props.style,
        lang : "fr",
        id: this.props.id
    }

    render(){
 
            var btnStyle = {
                border: this.props.data.style.border,
                borderColor: this.props.data.style.borderColor,
                borderWidth: this.props.data.style.borderSize,
                borderRadius: this.props.data.style.borderRadius,
                backgroundColor: this.props.data.style.bgColor,
                color: this.props.data.style.color,
                width: this.props.data.style.width,
                height: this.props.data.style.height
            }
            

        return(
            <>
                <div className="show-props"><i onClick={this.props.onSelect} id={this.props.id} className="fa fa-wrench fa-2x"></i></div>
                <button className={this.props.data.className} style={btnStyle} id={`button_`+this.props.id} name={`button_`+this.props.id}>{this.props.data.caption}</button>                    
            </>
      
        );
    }
}

export default Button;