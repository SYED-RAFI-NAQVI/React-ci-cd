import React, { Component } from 'react'

import TodoItem from './todoItem'

export default class TodoList extends Component {
    render() {
        const { items, handleClear, handleEdit, handleDelete } = this.props
        return (
            <div>
                <h2>Todo List</h2>
                <br />
                {items.map(item => {
                    return (
                        <TodoItem
                            key={item.id}
                            title={item.title}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                        />
                    )
                })}
                <button onClick={handleClear}> Clear All</button>
            </div>
        )
    }
}
