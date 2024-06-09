import { Button, Subtitle } from '../UI';
import { indicator } from '../../utils/constants';

import styles from './Best.module.scss';

import best from '../../assets/imgs/additional/best.png';
import bestBig from '../../assets/imgs/additional/best-big.png';

const TEXTS = [
  {id: 1, text: 'Hi! My name’s [Insert Name], and I founded [Insert] in ____.'},
  {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.'},
  {id: 3, text: 'Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.'},
  {id: 4, text: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.'},
  {id: 5, text: 'Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.'},
  {id: 6, text: 'Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.'},
  {id: 7, text: 'Cras mattis varius mollis.'},
];

export const Best = () => {
  return (
    <section className={styles.best}>
      <div className={styles.best__subtitle}>
        <Subtitle text='Be your best self.' />
      </div>

      <div className={styles.best__content}>
        <div className={styles.best__img}>
          {!indicator
            ? (
                <img
                  src={best}
                  alt="best you"
                />
              )
            : (
                <img
                  src={bestBig}
                  alt="best you"
                />
            )}
        </div>

        <div className={styles.best__info}>
          <ul className={styles.best__text}>
            {TEXTS.map(text => (
              <li key={text.id}>{text.text}</li>
            ))}
          </ul>

          {indicator && (
            <div className={styles.best__button}>
              <Button content={`Customize Your Outfit`} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
};
