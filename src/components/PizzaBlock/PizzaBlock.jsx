import React, { useState } from 'react';
import css from './PizzaBlock.module.css';

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [pizzaCount, setPizzaCount] = useState(0);

  const onClickAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };

  const typeNames = ['subtle', 'traditional'];

  return (
    <div className={css.block}>
      <img style={{ width: 260 }} src={imageUrl} alt={title} />
      <h4 className={css.blocktitle}>{title}</h4>
      <div className={css.blockselector}>
        <ul className={css.choice}>
          {types.map((type, i) => (
            <li
              key={type}
              onClick={() => setActiveType(type)}
              className={
                activeType === i ? css.choicelistactive : css.choicelist
              }
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul className={css.choice}>
          {sizes.map((size, i) => (
            <li
              key={size}
              onClick={() => setActiveSize(i)}
              className={
                activeSize === i ? css.choicelistactive : css.choicelist
              }
            >
              {size} h.
            </li>
          ))}
        </ul>
      </div>
      <div className={css.bottom}>
        <div className={css.blockprice}>from {price} $</div>
        <button onClick={onClickAdd} className={css.buttonoutline}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i className={css.i}>{pizzaCount}</i>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
