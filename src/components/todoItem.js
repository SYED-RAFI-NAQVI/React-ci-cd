import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props
    return (
      <div>
        <p>{title}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <br />
        <hr />
        <br />
      </div>
    )
  }
}
