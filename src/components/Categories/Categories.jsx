import { useState } from 'react';
import css from './Categories.module.css';

export default function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = index => {
    setActiveItem(index);
  };
  return (
    <div className={css.categories}>
      <ul style={{ display: 'flex' }}>
        <li
          className={activeItem === null ? css.liactive : css.active}
          onClick={() => onSelectItem(null)}
        >
          All
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? css.liactive : css.active}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}
