import {Component} from "react";
import {Link} from "react-router-dom";

const listItems = [
  {
    name: 'Electronics',
    items: ['Accessories and Supplies', 'Camera and Photo', 'Cell Phones and Accessories', 'GPS and Navigations']
  },
  {
    name: 'Baby',
    items: ['Activity and Entertainment', 'Baby and Toddler Toys', 'Baby Care', 'Diapering', 'Gifts']
  },
  {
    name: 'Sports',
    items: ['Sports and Outdoors', 'Outdoor Recreation', 'Sports and Fitness', 'Fan Shop']
  },
  {
    name: 'Toys',
    items: ['Action Figures and Statues', 'Arts and Crafts', 'Baby and Toddler Toys', 'Building Toys']
  },
  {
    name: 'Pet',
    items: ['Dogs', 'Cats', 'Fish and Aquatic Pets', 'Birds', 'Horses']
  }
];


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: '',
      targetList:'',
    }
  }

  handleShowList = (e) => {
    const {showList} = this.state;
    const targetList = e.target.getAttribute('value');
    this.setState({
      showList: !showList,
      targetList: targetList,
    })

  }

  render() {
    const {showList, targetList} = this.state
    const {pushShowCollection} = this.props
    return (
      <div className="col-span-1 row-span-4 inline-block border border-black bg-orange-200">
        {(listItems.map((item) => (
            <dl
              key={item.name}
              className="list-disc"

            >
              <dt
                value={item.name}
                className="font-bold p-1 pl-2 text-2xl cursor-pointer hover:bg-amber-600"
                onClick={this.handleShowList}
              >
                {item.name}
              </dt>
              {(targetList === item.name && showList) ? (

                item.items.map((item) => (
                  <Link
                    to={`/Shop_net/${item}`}
                    key={item}
                    value={item}
                    className="text-xl p-1 pl-8 block cursor-pointer hover:bg-amber-300"
                    onClick={pushShowCollection}
                  >
                    {item}
                  </Link>
                ))
              ) : ''}
            </dl>)
          )
        )}
      </div>

    );
  }
}

