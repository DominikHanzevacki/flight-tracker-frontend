import {Menu, type MenuProps} from "antd";
import {Link, useLocation} from "react-router-dom";
import {useMemo} from "react";
import {capitalizeFirstLetter} from "@helpers/textHelpers";
import {AIRLINES_TAG, AIRPORT_LIVE_LOCATION_TAG, AIRPORTS_TAG, COUNTRIES_TAG} from "@constants/tags/tags";
import {CloudOutlined, FlagOutlined, GoogleOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";

export const AppMenu = () => {
  const {t} = useTranslation();
  const location = useLocation();
  const selectedKey = useMemo(() => {
    const tags = [
      COUNTRIES_TAG,
      AIRPORTS_TAG,
      AIRLINES_TAG,
      AIRPORT_LIVE_LOCATION_TAG
    ];
    const pathKey = location.pathname.split('/').filter(Boolean)[0] || '';
    return tags.includes(capitalizeFirstLetter(pathKey)) ? pathKey : '';
  }, [location.pathname]);
  const items: MenuProps['items'] = [
    {
      key: 'airports-live-location',
      label: <Link to="/airports-live-location">{t('airports.live-location-title')}</Link>,
      icon: <GoogleOutlined/>
    },
    {
      key: 'airlines',
      label: <Link to="/airlines">{t('airlines.title')}</Link>,
      icon: <CloudOutlined/>
    },
    {
      key: 'airports',
      label: <Link to="/airports">{t('airports.title')}</Link>,
      icon: <FlagOutlined/>
    },
  ]
  return (
    <Menu
      className="!bg-primary"
      mode="inline"
      items={items}
      defaultSelectedKeys={[selectedKey]}
    />
  )
}
