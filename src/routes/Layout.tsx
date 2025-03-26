import i18n from 'i18n/i18n';
import { PropsWithChildren, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'theme/ThemeProvider';
import { HorecaNightLogo, HorecaLightLogo } from '../assets/index';
import { AppRoutes } from './routesArray';
import { ThemeButton } from 'containers';

interface Props extends PropsWithChildren {}

const Layout = (props: Props) => {
  interface ChangeFunctions {
    changeLanguage: (language: string) => void;
  }
  type TypeLanguage = Pick<ChangeFunctions, 'changeLanguage'>;

  const [theme] = useContext(ThemeContext);

  const changeLanguage: TypeLanguage['changeLanguage'] = (language) => {
    i18n.changeLanguage(language);
    console.log(i18n.resolvedLanguage);
  };

  return (
    <div>
      <div
        className="navbar"
        style={{
          padding: '10px 15px',
        }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <img
            src={theme === 'light' ? HorecaLightLogo : HorecaNightLogo}
            alt=""
            style={{
              width: '120px',
            }}
          />
        </div>
        <ul className="navbar__links">
          <Link to={AppRoutes.Home}>Home</Link>
          <Link to={AppRoutes.About}>About</Link>
          <Link to={AppRoutes.History}>History</Link>
        </ul>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <select
            defaultValue={i18n.resolvedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">En</option>
            <option value="ru">Ru</option>
          </select>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
};

export default Layout;
