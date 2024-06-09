import { useEffect, useState } from 'react';

import { Stars, Subtitle } from '../UI';
import { indicator } from '../../utils/constants';
import { client } from '../../client';
import { FansSlider } from '..';

import styles from './Fans.module.scss';

import girslSmall from '../../assets/imgs/additional/girls-small.png';
import girslBig from '../../assets/imgs/additional/girls-big.png';

export const Fans = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "comment"]{
        slug,
        author->{
          name
        },
        body,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
      }`)
      .then((data) => setComments(data))
      .catch(console.error);
  }, []);

  return (
    <section className={styles.fans}>
      <div className={styles.fans__subtitle}>
        <Subtitle text='What are our fans saying?' />
      </div>

      <div className={styles.fans__info}>
        <p className={styles.fans__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>

      {!indicator
        ? (
            <img
              src={girslSmall}
              alt="pijama girls"
              className={styles.fans__img}
            />
        ) : (
          <img
            src={girslBig}
            alt="pijama girls"
            className={styles.fans__img}
          />
        )}

      {comments.length && (
        <div className={styles.fans__slider}>
          <FansSlider comments={comments} />
        </div>
      )}

      <div className={styles.fans__stars}>
        <Stars />
      </div>
    </section>
  )
};
