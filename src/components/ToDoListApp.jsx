import React from 'react';
import ToDoList from './ToDoList';
/* import './styles/app.scss'; */

class ToDoListApp extends React.Component {
	    constructor(){
	        super();
	        this.state = {
	        	newTodoInputValue: '',
	            displayFilter: 'all',
	            todos: [{index: 0, task: "ball hard", completed: true}, {index: 1, task: "make tunes", completed: false}, {index: 2, task: "love yo mother", completed: true}, {index: 3, task: "escape alcatraz", completed: false}],
	            lastIndex: 3
	        };
	        this.newTodoInputChange = this.newTodoInputChange.bind(this);
	        this.addTodo = this.addTodo.bind(this);
	        this.toggleCompleted = this.toggleCompleted.bind(this);
	        this.deleteTodo = this.deleteTodo.bind(this);
	        this.filterButtonClick = this.filterButtonClick.bind(this);
	    }

	    newTodoInputChange(event) {
			this.setState({newTodoInputValue: event.target.value});
		}

	    addTodo() {
	    	let newTodoObj = {index: (this.state.lastIndex + 1), task: this.state.newTodoInputValue, completed: false};
	    	this.setState({newTodoInputValue: '', todos: [...this.state.todos, newTodoObj], lastIndex: (this.state.lastIndex + 1)});
	    	document.getElementById('todoInput').value='';
	    }

	    toggleCompleted(index) {
	    	let todos = this.state.todos;
			let todo = todos.find((obj) => { return obj.index === index; });
			todo.completed = !todo.completed;
	    	this.setState({todos: todos});
	    }

	    deleteTodo(index) {
	    	// console.log(event.target); >> why does .name work but not .index when you add index attr to delete button?
	    	let todos = this.state.todos;
	    	let todo = todos.find((obj) => { return obj.index === index; });
			todos.splice(todos.indexOf(todo),1);
	    	this.setState({todos: todos});
	    }

	    filterButtonClick(event) {
	    	this.setState({displayFilter: event.target.name});
	    }

	    render() {
	        return <ToDoList 
	        	newTodoInputChange={this.newTodoInputChange}
	        	addTodo={this.addTodo}
	        	toggleCompleted={this.toggleCompleted}
	        	deleteTodo={this.deleteTodo}
	        	displayFilter={this.state.displayFilter}
	        	todos={this.state.todos}
	        	filterButtonClick={this.filterButtonClick}
	        />;
	    }
}

export default ToDoListApp;