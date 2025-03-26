import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="row">
      <h1>{t('about.title')}</h1>
    </div>
  );
};

export default About;
