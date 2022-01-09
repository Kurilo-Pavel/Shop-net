import React, {Component,} from 'react';
import Header from "./Header";
import List from "./List/List";
import Gallery from "./Gallery/Gallery";
import Cash from "./Cash/Cash";
import Footer from "./Footer/Footer";

import {Formik, Field, Form} from "formik";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showItem: '',
      showForm: false,
      targetDirectory: '',
      login: '',
      password: '',
    })
  }

  handleLogin = (e) => {
    this.setState({
      login: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleCheck = () => {
    if (this.state.login === 'admin' && this.state.password === 'admin') {

      return true
    }
  }

  handleChangeShowItem = (e) => {
    this.setState({
      showItem: true,
      targetDirectory: e.target.getAttribute('value')
    })
  }

  handleShowItems = () => {
    if (this.state.showItem) {
      const items = require(`./Gallery/${this.state.targetDirectory}.json`)
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
        <Header onRegistClick={this.handleShowForm}
                handleLogin={this.handleLogin}
                handlePassword={this.handlePassword}
                handleCheck={this.handleCheck}
        />
        <List pushShowItems={this.handleChangeShowItem}/>
        <Gallery className="text-center"
                 showRegistration={this.handleShowRegistration()}
                 showItems={this.handleShowItems()}
                 handleCheck={this.handleCheck()}/>

        <Cash/>
        <Footer/>
      </div>
    );
  }
}
