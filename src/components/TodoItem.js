import React from 'react';

const TodoItem = ({
  title,
  completed,
  handleComplete,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div>
      <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
        {completed ? (
          <h6 className='text-muted d-flex align-items-center'>
            <del>{title}</del>
            <span
              style={{
                marginLeft: '5px',
                fontSize: '9px',
                textAlign: 'center',
              }}
              className='badge rounded-pill bg-secondary ml-5'
            >
              complete
            </span>
          </h6>
        ) : (
          <h6>{title}</h6>
        )}
        <div className='todo-icon'>
          <span
            role='button'
            className='mx-2 text-success'
            onClick={handleComplete}
          >
            <i className='fas fa-check'></i>
          </span>
          <span
            className='mx-2 text-primary'
            role='button'
            onClick={handleEdit}
          >
            <i className='fas fa-pen' />
          </span>
          <span
            className='mx-2 text-danger'
            role='button'
            onClick={handleDelete}
          >
            <i className='fas fa-trash' />
          </span>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
