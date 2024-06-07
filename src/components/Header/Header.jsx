import { bigScreenBreakpoint, userDeviceWidth } from '../../utils/constants';
import styles from './Header.module.scss';

export const Header = () => {

  const content = userDeviceWidth >= bigScreenBreakpoint
    ?'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders > $200   |   easy 45 day return window.'
    : 'FREE SHIPPING on orders > $200';

  return (
    <header className={styles.header}>
      {content}
    </header>
  )
};
