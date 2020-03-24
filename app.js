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
      hover: false,
      done: false
    };
  }

  onListItemClick () {
    console.log('Done action triggered!');
    this.setState({
      done: !this.state.done
    });
    console.log('Done is:', this.state.done);
  }

  onListItemHover() {
    console.log('Hover action triggered!');
    this.setState({
      hover: !this.state.hover,
    });
    console.log('Hover is:', this.state.hover);
  }

  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal',
      textDecorationLine: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
