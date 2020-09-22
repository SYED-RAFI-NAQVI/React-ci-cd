import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';
import { v4 as uuidv4 } from 'uuid';


import TodoInput from './components/todoInput';
import TodoList from './components/todoList';


class App extends Component {
  state = {
    items: [{ id: 1, title: 'first todo' }, { id: 2, title: 'second todo' }],
    id: uuidv4(),
    item: "",
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({ items: updatedItems, item: '', id: uuidv4(), editItem: false }, () => console.log(this.state.items))
  }

  handleDelete = id => {
    const filteredItems = this.state.items.filter(
      item => item.id !== id
    )
    this.setState({ items: filteredItems })
  }

  handleEdit = id => {
    const filteredItems = this.state.items.filter(
      item => item.id !== id
    )
    const selectedItems = this.state.items.find(item =>
      item.id === id
    )
    this.setState({
      items: filteredItems,
      item: selectedItems.title,
      id: id,
    })
  }

  handleClear = () => {
    this.setState({
      items: []
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h2>Add Todo</h2>
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem} />
        <br />
        <TodoList
          items={this.state.items}
          handleClear={this.handleClear}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    )
  }
}

export default App;
