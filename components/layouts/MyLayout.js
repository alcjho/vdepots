import Header from '../Header';


const layoutData = {
  "container_type":"container-fluid",
  "showHeader": true,
  "showFooter": true
}

let Layout = props => (
 
  <div className="">
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;

