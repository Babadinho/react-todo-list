import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [todos, setTodos] = useState({
    items: window.localStorage.getItem('items')
      ? JSON.parse(window.localStorage.getItem('items'))
      : [],
    id: uuid(),
    item: '',
    editItem: false,
    completed: false,
  });

  const { items, id, item, editItem } = todos;

  const handleChange = (e) => {
    const value = e.target.value;
    setTodos({ ...todos, item: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item) {
      alert('Enter a Todo');
      return;
    }

    const newItem = {
      id: id,
      title: item,
      completed: false,
    };

    const updatedItems = [...items, newItem];

    window.localStorage.setItem('items', JSON.stringify(updatedItems));

    setTodos({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false,
    });
  };

  const clearList = () => {
    setTodos({ ...todos, items: [] });
    localStorage.removeItem('items');
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setTodos({ ...todos, items: filteredItems });
    localStorage.setItem('items', JSON.stringify(filteredItems));
  };

  const handleEdit = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    const selecTedItem = items.find((item) => item.id === id);
    setTodos({
      ...todos,
      items: filteredItems,
      item: selecTedItem.title,
      editItem: true,
      id: id,
    });
  };

  const handleComplete = (id) => {
    let complete = [];
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('items')) {
        complete = JSON.parse(localStorage.getItem('items'));
        console.log(complete);
      }

      const completedItem = items.find((item) => item.id === id);
      completedItem.completed = !completedItem.completed;
      complete.map((item, i) =>
        item.id === completedItem.id
          ? (complete[i].completed = !complete[i].completed)
          : complete[i].completed
      );
      localStorage.setItem('items', JSON.stringify(complete));
    }

    setTodos({
      ...todos,
    });
  };

  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <div className='col-8 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>todo list</h3>
            <TodoInput
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              editItem={editItem}
              item={item}
            />
            {items.length > 0 && (
              <Route
                path='/'
                exact
                render={(props) => (
                  <>
                    <TodoList
                      clearList={clearList}
                      items={items}
                      handleComplete={handleComplete}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  </>
                )}
              />
            )}

            <Route path='/about' component={About} />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
