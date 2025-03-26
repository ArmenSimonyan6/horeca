import { FC, useContext } from 'react';
import { SadNightImg, SadLightImg } from '../../assets/index';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'theme/ThemeProvider';
import styles from './PageNotFound.module.scss';

const PageNotFound: FC = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className="row">
      <div className={styles.errorPage}>
        <div className={styles.errorPage__smileImg}>
          <img
            src={theme === 'light' ? SadLightImg : SadNightImg}
            alt=""
            style={{ width: '80px' }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: '4rem', marginTop: '20px' }}>404</h1>
        </div>
        <div>
          <p style={{ margin: '20px 0' }}>Oops. This Page Not Found!</p>
          <Link to="/">Go Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
