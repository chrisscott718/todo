var React = require('react');
var uuid = require('node-uuid');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean yard',
          completed: true
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        {
          id: uuid(),
          text: text,
          completed: false
        },
        ...this.state.todos
      ]
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map( (todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
