import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todoActions';

 let TodoInput = ({ dispatch }) => {
  let input

  return (
    <div>
      <form 
        className='form-inline'
        onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
      <div className='form-group'>
        <input ref={node => {
          input = node
        }} placeholder="waa ? "/>
        <input type="submit" value="ADD TODO" className='btn-primary' />
        </div>
      </form>
    </div>
  )
}

TodoInput = connect()(TodoInput)

export default TodoInput