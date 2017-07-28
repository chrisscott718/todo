var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function(){
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return(
      <div onClick={ () => {
        dispatch(actions.toggleTodo(id));
      }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

export default connect()(Todo);
