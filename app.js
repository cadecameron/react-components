var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList list={['Eggs', 'Milk']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.list.map(element => {
      return <GroceryListItem item={element} />
    })}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  // onListItemClick () {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // }

  onListItemHover() {
    console.log('Hover acction triggered!');
    this.setState({
      hover: !this.state.hover,
    });
    console.log('Hover is:', this.state.hover);
  }

  render() {

    var style = {
      font: this.state.hover ? `bold` : `none`,
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById("app")
);