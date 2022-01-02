import React, {Component} from 'react';
import Regist from "../Header/Regist";

export default class Gallery extends Component {
  render() {
    const {showRegist}=this.props;
    return (
      <div className="col-start-2 col-span-3 row-span-4
        inline-block bg-orange-400 border-red">
        <Regist showRegist={showRegist}/>
      </div>

    );
  }
}
