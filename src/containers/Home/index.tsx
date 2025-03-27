import { FC } from 'react';
import { useTranslation } from 'react-i18next';
const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="row">
      <div>
        <h1>{t('home.title')}</h1>
      </div>
      <div>
        <p>{t('home.subTitle')}</p>
      </div>
    </div>
  );
};

export default Home;
