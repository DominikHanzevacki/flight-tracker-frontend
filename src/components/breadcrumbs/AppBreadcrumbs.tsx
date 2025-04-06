import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";
import {useMemo} from "react";
import type {IAppBreadcrumbsProps} from "@interfaces/breadcrumbs/interface";
import {useTranslation} from "react-i18next";
import {capitalizeFirstLetter} from "@helpers/textHelpers";

export const AppBreadcrumbs = <T extends { id: number, name: string }>({
  selectedRow
}: IAppBreadcrumbsProps<T>) => {
  const location = useLocation();
  const {t} = useTranslation();

  const pathListItems = useMemo(() => {
    return location.pathname.split('/').filter(Boolean);
  }, [location.pathname]);

  const breadcrumbItems = useMemo(() => {
    const items = pathListItems.map((item, index) => {
      const url = `/${pathListItems.slice(0, index + 1).join('/')}`;

      const title = selectedRow && parseInt(item) === selectedRow.id ? capitalizeFirstLetter(selectedRow.name) : t(item + '.title');
      
      return {
        key: url,
        title: title,
        href: url !== location.pathname ? url : undefined,
      };
    });
    items.unshift({
      key: '/',
      title: t('general.home'),
      href: '/',
    })
    return items;
  }, [location.pathname, pathListItems, selectedRow, t]);

  return (
    <Breadcrumb
      separator=">"
      items={breadcrumbItems}
    />
  );
}
