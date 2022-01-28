import React, {Component,} from 'react';
import Header from "./Header";
import List from "./List/List";
import Gallery from "./Gallery/Gallery";
import Cash from "./Cash/Cash";
import Footer from "./Footer/Footer";
import PlaceItems from "./Gallery/PlaceItems";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {auth, db, storage} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';
import Regist from "./Header/Regist";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {collection, addDoc} from "firebase/firestore"
import Basket from "./Header/Basket";
import ItemPage from "./Gallery/ItemPage";
// import {current} from "@reduxjs/toolkit";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showCollection: '',
      showForm: false,
      targetDirectory: '',
      login: '',
      password: '',
      currentUser: '',
      image: '',
      items: require(`./Gallery/Items.json`),
      searchValue:'',
      // targetCollection:'',
      targetItem: '',
    }

  }

  // handlePassword = (e) => {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }
  //
  // handleCheck = () => {
  //   if (this.handleCheck === true) {
  //     console.log('f')
  //     return true
  //   }
  // }

  handleChangeShowCollection = (e) => {
    this.setState({
      showCollection: true,
      targetCollection: e.target.getAttribute('value')
    })
  }

  handleShowCollection = () => {
    if (this.state.showCollection) {
      return require(`./Gallery/Items.json`)

    }
    return []
  }
  handleShowItem = (e) => {
    this.setState({
      targetItem: e.target.getAttribute('value')
    })
  }


  handleShowForm = () => {
    const {showForm} = this.state
    this.setState({
      showForm: !showForm
    })
  }
  handleShowRegistration = () => {
    const {registration} = this.state
    this.setState({
      registration: !registration
    })
  }

  handleShowLogin = () => {
    const {login} = this.state
    this.setState({
      login: !login
    })
  }

  componentDidMount() {

    onAuthStateChanged(auth, (user) => {

      this.setState({
        currentUser: user,
      });
    });
  }

  handleSend = (e) => {

    const file = e.target.files[0];
    const storageRef = ref(storage, 'image')
    uploadBytes(storageRef, file).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(snapshot.ref)
      addDoc(collection(db, 'image'), {
        image: downloadURL,
      })
      this.setState({
        image: downloadURL,
      })
    })

  }
  searchItem = (e) => {
    this.setState({
      searchValue:e.target.value
    })
  }

  filterItems = () => {
    return this.state.items.filter(item => {
        return item.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
      }
    )
  }

  render() {
    const {
      currentUser,
      showForm,
      registration,
      login,
      image,
      targetCollection,
      targetItem,
    } = this.state;
    return (
      <Router>
        <div className="grid grid-cols-5 grid-rows-7">

          <Header
            currentUser={currentUser}
            handleShowForm={this.handleShowForm}
            showForm={showForm}
            showRegistration={this.handleShowRegistration}
            showLogin={this.handleShowLogin}
            login={login}
            image={image}
            searchItem={this.searchItem}
          />

          <List pushShowCollection={this.handleChangeShowCollection}/>

          <Routes>
            <Route
              path="/Shop_net"
              element={
                <Gallery className="text-center"
                         filterItems={this.filterItems()}
                         handleShowItem={this.handleShowItem}
                />
              }
            />

            <Route
              path="/Shop_net/:collection"
              element={
                <PlaceItems showCollection={this.handleShowCollection()}
                            targetCollection={targetCollection}
                            filterItems={this.filterItems()}
                />
              }
          />

            <Route
              path="/Shop_net/:items"
              element={
                <ItemPage targetItem={targetItem}
                          showCollection={this.handleShowCollection()}
                />
              }
            />

            <Route
              path="/basket"
              element={
                <Basket currentUser={currentUser}/>
              }
            />
          </Routes>

          <Cash/>

          <Footer/>

          <Regist
            showRegistration={this.handleShowRegistration}
            registration={registration}
            handleSend={this.handleSend}
          />
        </div>
      </Router>
    );
  }
}
