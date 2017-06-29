var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', ()=> {
  it('should exist', ()=>{
    expect(AddTodoForm).toExist();
  });

  it('should call onAddTodo if valid text is entered', () => {
    let spy = expect.createSpy(),
        addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />),
        $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = 'test';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('should not call onAddTodo if valid text is entered', () => {
    var spy = expect.createSpy(),
        addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />),
        $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
