import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="App">
        
        <div class="container">
        <p>
        <label for="new-task">Add Item</label>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </p>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">


          {/* <li>
            <input type="checkbox"/><label>Pay Bills</label><input type="text"/><button class="edit">Edit</button
          ><button class="delete">Delete</button></li>
          <li class="editMode"><input type="checkbox"/><label>Go Shopping</label><input type="text" value="Go Shopping"/><button class="edit">Edit</button><button class="delete">Delete</button></li> */}
          
        </ul>
      
      <h3>Completed</h3>
      <ul id="completed-tasks">
        {/* <li><input type="checkbox" checked/><label>See the Doctor</label><input type="text"/><button class="edit">Edit</button><button class="delete">Delete</button></li> */}
      </ul>
        </div>
        
      </div>
    );
  }
}




export default App;
