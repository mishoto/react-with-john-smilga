import React, { useState, useEffect } from 'react';
import List from '../components/List';
import Alert from '../components/Alert';

const getLocalStorage = ()=> {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }else{
    return [];
  }
}

const Home = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter a value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        }),
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'seccess', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = {
        id: new Date().getTime().toString(), // external lib UUID!
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, 'success', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const editedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editedItem.title);
  };

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='item'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={() => setList([])}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default Home;
