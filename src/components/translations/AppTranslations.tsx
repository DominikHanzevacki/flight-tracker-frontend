import {Switch} from 'antd';
import React from 'react';
import {useTranslation} from 'react-i18next';

export const AppTranslations = () => {
  const {i18n, t} = useTranslation();

  const changeLanguage = (checked: boolean) => {
    const language = checked ? 'en' : 'hr';
    i18n.changeLanguage(language);
  };

  return (
    <Switch
      className={i18n.language === 'en' ? '!bg-blue-dark' : ''}
      checkedChildren={t('general.english')}
      unCheckedChildren={t('general.croatian')}
      onChange={changeLanguage}
      checked={i18n.language === 'en'}
    />
  );
}
