import Link from 'next/link';
import Head from 'next/head';
import Nav from './Nav';

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('mount');
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    const { children, title = 'This is the default title' } = this.props;
  
    return (


      <div>
        <style jsx global>{`

        html {
          height: 100%;
        }

        body {
          min-height: 100%;
          margin: 0;
          padding: 0;
        }       

        .left-menu {
          background-color: #ddd;
          border-bottom: 1px solid #eee;
          color: #222;
          height:auto;
          padding:40px;
        }

        .right-menu {
          background-color: #ddd;
          border-bottom: 1px solid #eee;
          color: #222;
          height:auto;
          padding:40px;

        }    
        
        .flex-view {
          background-color: #fff;
          height:100wh;
          padding:40px;
        }           
    
        .with-margin {
          margin: 20px;
        }

        .container{
          padding:20px;
        }
    
        .with-border{
          border: 1px solid #ddd;
        }

        .title{
          background-color:blue;
          color:#fff;
          border:1px solid #eee;
        }

        .container_edit{
          position:absolute;
          border:1px solid #eee;
          border-radius: 50%;
          background-color: #ddd;
          height:100px;
          right:0;
          top:0;
        }

        .row_edit{
          position:absolute;
          border:1px solid #eee;
          border-radius: 50%;
          background-color: #ddd;
          height:100px;
          right:0;
          top:0;
        }


        .col_edit{
          position:absolute;
          border:1px solid #eee;
          border-radius: 50%;
          background-color: #ddd;
          height:100px;
          right:0;
          top:0;
        }        
        
        `
        }
        </style>

        <Head>
          <link rel="stylesheet" href="../static/assets/css/bootstrap.css"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link rel="stylesheet" href="../static/assets/css/style.css"></link>
        </Head>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
              <div className="col-sm-12 title">Flex Editor</div>
              <div className="col-sm-12">
                { children }
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}