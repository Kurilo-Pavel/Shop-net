import React, {Component} from 'react';
import Regist from "../Header/Regist";
import PlaceItems from "./PlaceItems";

export default class Gallery extends Component {
  render() {
    const {showRegistration}=this.props;
    const {showItems}=this.props;
    return (
      <div className="col-start-2 col-span-3 row-span-4
        inline-block bg-orange-400 border-red">
        <PlaceItems showItems={showItems}/>
        <Regist showRegistration={showRegistration}/>
      </div>

    );
  }
}
