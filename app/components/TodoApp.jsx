var React = require('react');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean yard'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('newtodo ' + text);
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
