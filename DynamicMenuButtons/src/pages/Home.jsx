import React, { useState } from 'react';
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import items from '../data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

const Home = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };
  return (
    <section className='section menu'>
      <div className='title'>
        <h3>Our menu</h3>
        <div className='underline'></div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </div>
    </section>
  );
};

export default Home;
