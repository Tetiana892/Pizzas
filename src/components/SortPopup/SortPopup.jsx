import React, { useEffect, useRef, useState } from 'react';
import css from './SortPopup.module.css';

const SortPopup = ({ items }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const sortRef = useRef();
  const activeLabel = items[activeItem];

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = event => {
    event.preventDefault();

    const path =
      event.path ||
      (event.composedPath && event.composedPath()) ||
      event.composedPath(event.target);

    if (!path || !path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = index => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className={css.sort}>
      <div className={css.sortlabel}>
        {!visiblePopup ? (
          <svg
            className={css.svg}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />{' '}
          </svg>
        ) : (
          <svg
            className={css.svg}
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"
              fill="#2C2C2C"
            />
          </svg>
        )}

        <b style={{ marginRight: 8 }}>Sort by:</b>
        <span onClick={toggleVisiblePopup} className={css.popularity}>
          {activeLabel}
        </span>
      </div>
      {visiblePopup && (
        <div className={css.sortpopup}>
          <ul className={{ oveflow: 'hidden' }}>
            {items &&
              items.map((name, index) => (
                <li
                  onClick={() => onSelectItem(index)}
                  className={activeItem === index ? css.active : css.price}
                  key={`${name}_${index}`}
                >
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortPopup;
