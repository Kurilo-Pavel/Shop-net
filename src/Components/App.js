import React, {Component,} from 'react';
import Header from "./Header";
import List from "./List/List";
import Gallery from "./Gallery/Gallery";
import Cash from "./Cash/Cash";
import Footer from "./Footer/Footer";

import {Formik, Field, Form} from "formik";
import items from "./Gallery/my.json";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showItem: '',
      showForm: false
    })
  }

  handleChangeShowItem = () => {
    this.setState({
      showItem: true
    })
  }

  handleShowItems = () => {
    if (this.state.showItem) {
      const items = require('./Gallery/my.json')
      return items
    }
    return []
  }
  handleShowForm = () => {
    const {showForm} = this.state
    this.setState({
      showForm: !showForm
    })
  }
  handleShowRegistration = () => {
    return this.state.showForm
  }

  render() {
    return (
      <div className="grid grid-cols-5 grid-rows-7">
        <Header onRegistClick={this.handleShowForm}/>
        <List pushShowItems={this.handleChangeShowItem}/>
        <Gallery showRegistration={this.handleShowRegistration()} showItems={this.handleShowItems()}/>
        <Cash/>
        <Footer/>
      </div>
    );
  }
}
