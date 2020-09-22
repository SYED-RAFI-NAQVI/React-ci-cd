import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input value={item} onChange={handleChange} />
          <button type="submit">ADD TODO</button>
        </form>
      </div>
    )
  }
}
