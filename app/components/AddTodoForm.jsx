var React = require('react');

var AddTodoForm = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },
  onSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    var text = todoText.trim();

    if(text.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText.trim());
    } else {
      this.refs.todoText.value = '';
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="What are you doing?" />
          <button type="submit" className="button expanded">Add Item</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodoForm;
