import React from 'react';
import Link from 'next/link';
import JsonData from '../../components/header/headerData';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.defaultOption = JsonData.header1;
    this.state = {
        question: "",
        data : "",
        options: this.defaultOption
    }
  }

  componentDidMount() {
    fetch("http://localhost:3003/admin/flex")
    .then(res => res.json())
    .then((data) => {
      this.setState({ data: data })
      console.log(data);
    })
    .catch(console.log)
  } 

    render () {
      let { options } = this.state;
      
      return (
        <div>


          {this.customContainer(options)}
        </div>
      );
    }

    customContainer = (options) => {
      const containerClass = "container";
      const containerStyle = { 
        border: options.container.border, 
        backgroundColor: options.container.bgColor,
        borderColor: options.container.bgColor
      };

      return (
        <div className={containerClass} distyle={containerStyle}>
          <div className="container_edit"></div>
          {options.name}
        </div>
      )
    }

  //adding rows for the main container
  customRow = (options) => {
    const rowClass = 'row';
    const rowStyle = { 
    };
    const listItems = options.map((cusRow, index) =>
      <div className={rowClass} style={rowStyle} key={index}>
          {this.customCol(options[index].cols)}
      </div>
    );
    return (
        listItems
    )
  }

  //adding columns for each rows
  customCol = (options) => {
    const listItems = options.map((cusCol, index) =>
      <div className={[cusCol.deskClass,cusCol.tabletClass,cusCol.mobileClass].join(' ')} 
           style={cusCol.style} key={index}>
      </div>
    );
    return (
        listItems
    )
  }    

}