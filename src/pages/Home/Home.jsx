import React, { useEffect, useState } from 'react';
import { Categories, SortPopup, PizzaBlock, Skeleton } from 'components';
import css from './Home.module.css';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(' https://6579c90f1acd268f9afa0d45.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={css.container}>
      <div className={css.contenttop}>
        <Categories
          onClickItem={name => console.log(name)}
          items={['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed']}
        />
        <SortPopup items={['popularity', 'price', 'alphabet']} />
      </div>
      <h2 className={css.contenttitle}>All Pizzas</h2>
      <div className={css.contentitems}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
