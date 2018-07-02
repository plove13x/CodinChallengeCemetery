import React, { Component } from 'react';
import Button from './Button';

class ToDoList extends Component {

    render() {
    	const tableRows = this.props.todos.map((todo) => {
	    	if ((todo.completed && this.props.displayFilter === "completed") || (!todo.completed && this.props.displayFilter === "active") || this.props.displayFilter === "all") {
	    		return <tr key={todo.index}>
	    			<td>{todo.task}</td>
	    			<td><input type="checkbox" checked={todo.completed} onChange={() => {this.props.toggleCompleted(todo.index)}} /></td>
	    			<td><Button buttonLabel="Delete" buttonClick={() => {this.props.deleteTodo(todo.index)}} /></td>
	    		</tr>;
	    	}
    	});

        return (
            <div className="todo-list">
                <h1>To-Do List</h1>
                <label>Enter Todo</label><input id='todoInput' onChange={this.props.newTodoInputChange}/><button onClick={this.props.addTodo}>Submit Todo</button>
                <table>
	                <tbody>
	                	<tr>
	                		<th>Todo</th><th>Completed</th><th>del</th>
	                	</tr>
	                	{tableRows}
	                	<tr>
	                		<td><Button buttonLabel="all" buttonClick={this.props.filterButtonClick} /></td>
	                		<td><Button buttonLabel="active" buttonClick={this.props.filterButtonClick} /></td>
	                		<td><Button buttonLabel="completed" buttonClick={this.props.filterButtonClick} /></td>
	                	</tr>
	                </tbody>
                </table>
            </div>
        );
    }
}

export default ToDoList;