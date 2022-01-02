import React, {Component} from 'react';

export default class List extends Component {
  render() {
    return (
      <div className="col-span-1 row-span-4 inline-block  border border-black bg-orange-200">
      <ul className="p-2">
        <li>
          Electronics
          <ul className="pl-4">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </li>
        <li>
          Home and kitchen
          <ul className="pl-4">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </li>
        <li>
          Garden
          <ul className="pl-4">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </li>
        <li>
          Toys
          <ul className="pl-4">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </li>
        <li>
          Tools
          <ul className="pl-4">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </li>
      </ul>

      </div>

    );
  }
}
