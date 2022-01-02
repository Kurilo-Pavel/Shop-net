import React, {Component, createRef} from 'react';
import Header from "./Header";
import List from "./List/List";
import Gallery from "./Gallery/Gallery";
import Cash from "./Cash/Cash";
import Footer from "./Footer/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.buttonRegistRef = React.createRef();
  }

  handleShowReg=()=>{
    this.buttonRegistRef.current.style.visibility = "visible"
  }
  render() {
    return (
      <div className="grid grid-cols-5 grid-rows-7">
        <Header onRegistClick={this.handleShowReg}/>
        <List/>
        <Gallery showRegist = {this.buttonRegistRef}/>
        <Cash/>
        <Footer/>
      </div>
    );
  }
}
