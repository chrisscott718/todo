var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodoForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    var text = todoText.trim();

    if(text.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText))
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

export default connect()(AddTodoForm);
