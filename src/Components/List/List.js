import {Component} from "react";

const listItems = [
  {
    name: 'Electronics',
    items: ['Accessories & Supplies', 'Camera & Photo', 'Cell Phones & Accessories', 'GPS & Navigations']
  },
  {
    name: 'Baby',
    items: ['Activity & Entertainment', 'Baby & Toddler Toys', 'Baby Care', 'Diapering', 'Gifts']
  },
  {
    name: 'Sports',
    items: ['Sports and Outdoors', 'Outdoor Recreation', 'Sports & Fitness', 'Fan Shop']
  },
  {
    name: 'Toys',
    items: ['Action Figures & Statues', 'Arts & Crafts', 'Baby & Toddler Toys', 'Building Toys']
  },
  {
    name: 'Pet',
    items: ['Dogs', 'Cats', 'Fish & Aquatic Pets', 'Birds', 'Horses']
  }
];


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: '',
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
    const{pushShowItems}=this.props
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
                  <dd
                    key={item}
                    value={item}
                    className="text-xl p-1 pl-8  cursor-pointer hover:bg-amber-300"
                    onClick={pushShowItems}

                  >
                    {item}
                  </dd>
                ))
              ) : ''}
            </dl>)
          )
        )}
      </div>

    );
  }
}

