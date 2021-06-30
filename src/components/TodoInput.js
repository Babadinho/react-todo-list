import React from 'react';

const TodoInput = ({ handleSubmit, handleChange, editItem, item }) => {
  return (
    <div className='card card-body my-3'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div
              className={
                editItem
                  ? 'input-group-text bg-primary text-white'
                  : 'input-group-text bg-success text-white'
              }
            >
              <i className='fas fa-book fa-2x' />
            </div>
          </div>
          <input
            type='text'
            className='form-control text-capitalize'
            placeholder='add todo item'
            value={item}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          className={
            editItem
              ? 'btn btn-block btn-primary mt-3 form-control'
              : 'btn btn-block btn-success mt-3 form-control'
          }
        >
          {editItem ? 'Edit Todo' : 'Add Todo'}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
