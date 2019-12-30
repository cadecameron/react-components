var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList list={['Eggs', 'Milk']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.list.map(element => {
      return <GroceryListItem item={element} />
    })}
  </ul>
);

var GroceryListItem = (props) => (
  <li>{props.item}</li>
);

ReactDOM.render(<App />, document.getElementById("app"));