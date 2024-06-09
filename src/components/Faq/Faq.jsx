import { useEffect, useState } from 'react';
import { FaqCard, Stars, Subtitle } from '../UI';
import { client } from '../../client';
import { indicator } from '../../utils/constants';

import styles from './Faq.module.scss';

import questions from '../../assets/imgs/additional/questions.png';

export const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    client
      .fetch(`*[_type == "faq"]{
        title,
        slug,
        body,
      }`)
      .then((data) => setFaqs(data))
      .catch(console.error);
  }, []);

  return (
    <section className={styles.faq}>
      <div className={styles.faq__content}>
        <div className={styles.faq__info}>
          <div className={styles.faq__subtitle}>
            <Subtitle text='Frequently asked questions.' />
          </div>

          <ul className={styles.faq__list}>
            {faqs.map(faq => (
              <FaqCard
                faq={faq}
                key={faq.slug.current}
                selectedOption={selectedId}
                setSelectedId={setSelectedId}
              />
            ))}
          </ul>
        </div>

        {!indicator
          ? (
            <div className={styles.faq__stars}>
              <Stars />
            </div>
          ) : (
            <div className={styles.faq__img}>
              <img src={questions} alt="pijama girls" />
            </div>
          )
        }
      </div>
    </section>
  )
};
