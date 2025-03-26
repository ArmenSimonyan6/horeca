import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const History: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="row">
      <h1>{t('history.title')}</h1>
    </div>
  );
};

export default History;
