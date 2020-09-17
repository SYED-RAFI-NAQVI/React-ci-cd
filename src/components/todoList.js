import React, { Component } from 'react'

import TodoItem from './todoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>todoList</h1>
                <TodoItem />
            </div>
        )
    }
}
