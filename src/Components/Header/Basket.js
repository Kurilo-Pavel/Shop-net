import React, {Component} from 'react';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase";
import withRouter from "../../withRouter";


export class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const {currentUser} = this.props;
    console.log(this.props)
    const docRef = doc(db, 'users', currentUser.email);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        this.setState({
          user: docSnap.data()
        })
        console.log(this.state);
      }
    })
  }

  render() {
    console.log('render')
    const {user} = this.state;
    if (!user) {
      return null;
    }
    return <div className="col-start-2 col-span-3 row-span-4
         inline-block bg-blue-400">
      {user.email}
    </div>;
  }
}

export default withRouter(Basket);