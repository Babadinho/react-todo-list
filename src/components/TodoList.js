import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  clearList,
  items,
  handleComplete,
  handleDelete,
  handleEdit,
}) => (
  <ul className='list-group my-5'>
    <h3 className='text-capitalize text-center'>todo List</h3>
    {items.map((item) => {
      return (
        <TodoItem
          key={item.id}
          title={item.title}
          completed={item.completed}
          handleComplete={() => handleComplete(item.id)}
          handleDelete={() => handleDelete(item.id)}
          handleEdit={() => handleEdit(item.id)}
        />
      );
    })}
    <button
      onClick={clearList}
      type='button'
      className='btn btn-danger btn-block text-capitalize mt-5 rounded-0 shadow-none'
    >
      clear todos
    </button>
  </ul>
);

export default TodoList;
