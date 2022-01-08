import React, {Component} from 'react';
import Image from './image/AilunGlassScreenProtector.jpg'

export default class PlaceItems extends Component {

    render() {
    const {showItems} = this.props
    return (
      <div>
        {{showItems} ?
          (<div>{showItems.map((item, index) =>
            <div><img key={index} src={Image}></img>
              <a>{item.name}</a>
            <p>{item.price}</p>
            </div>
          )
          }
          </div>) : ''}

      </div>
    );
  }
}
