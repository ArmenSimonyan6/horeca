import { FC } from 'react';
import styles from './Loader.module.scss';
import { TypeStyle } from './types';

const Loader: FC = (props: TypeStyle) => {
  return (
    <div>
      <span
        className={styles.loader}
        style={props.style}
      ></span>
    </div>
  );
};

export default Loader;
