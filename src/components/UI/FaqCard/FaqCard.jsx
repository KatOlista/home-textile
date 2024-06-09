import cn from 'classnames';

import styles from './FaqCard.module.scss';
import { useState } from 'react';

export const FaqCard = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeInfoHandler = () => {
    setIsOpen(false);
  };

  const openInfoHandler = () => {
    setIsOpen(true);
  };

  return (
    <li className={styles.card}>
      <div className={styles.card__wrapper}>
        <h3 className={styles.card__title}>{faq.title}</h3>

        {isOpen
          ? (
              <button
                onClick={closeInfoHandler}
                className={styles.card__button}
              >
                <span className={styles.card__close}></span>
              </button>
          ) : (
              <button
                onClick={openInfoHandler}
                className={styles.card__button}
              >
                <span className={styles.card__open}></span>
              </button>
          )}
      </div>

      <p
        className={cn(
          styles.card__text,
          { [styles.card__visible]: isOpen },
        )}
      >
        {faq.body[0].children[0].text}
      </p>
    </li>
  )
};
