import {useGetAirportsQuery} from "@services/api/airports/airportsSlice";
import {Flex, Spin, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import type {IAirport, IAirportTableProps} from "@interfaces/airports/interface";
import type {ColumnGroupType, ColumnsType} from "antd/es/table";
import {useNavigate} from "react-router-dom";
import type {IAirline} from "@interfaces/airlines/interface";
import type {ResultStatusType} from "antd/es/result";
import {ErrorPage} from "@pages/error-page/ErrorPage";
import {useTranslation} from "react-i18next";

export const AirportsTable = ({handleEditModalOpen, handleDeleteModalOpen}: IAirportTableProps) => {
  const {t} = useTranslation()
  const {data: airports, error, isLoading} = useGetAirportsQuery();
  const navigate = useNavigate();
  const columns: ColumnsType<IAirport> = [
    {
      title: t('airports.table.name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('airports.table.country-name'),
      dataIndex: ['country', 'name'],
      key: 'countryName',
      responsive: ['md'],
    },
    {
      title: t('airports.table.country-code'),
      dataIndex: ['country', 'code'],
      key: 'countryCode',
      responsive: ['lg'],
    },
    {
      title: t('airports.table.latitude'),
      dataIndex: ['position', 'latitude'],
      key: 'latitude',
      responsive: ['lg'],
    },
    {
      title: t('airports.table.longitude'),
      dataIndex: ['position', 'longitude'],
      key: 'longitude',
      responsive: ['lg'],
    },
    {
      title: t('airports.table.airlines'),
      dataIndex: 'airlines',
      key: 'airlines',
      render: (airlines) => airlines.map((airline: IAirline) => airline.name).join(', '),
      responsive: ['sm'],
    },
    {
      title: t('general.actions'),
      key: 'actions',
      render: (_: ColumnGroupType<IAirport>, record: IAirport) => (
        <Flex gap={16} justify="start" align="center">
          <EditOutlined className="!text-blue-dark hover:!text-blue-light"
            onClick={(e) => {
              e.stopPropagation();
              handleEditModalOpen({
                ...record,
                country_id: record.country.id,
                airlines: record.airlines.map(airline => airline.id),
              });
            }}/>
          <DeleteOutlined className="!text-danger-dark hover:!text-danger-light"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteModalOpen({
                ...record,
                country_id: record.country.id,
                airlines: record.airlines.map(airline => airline.id),
              });
            }}/>
        </Flex>
      ),
      onCell: () => ({
        onClick: (e) => {
          e.stopPropagation();
        },
      }),
    },
  ];

  if (isLoading) return <Spin className="w-full text-center" size="large"/>;
  if (error) {
    const errorMessage = error as { originalStatus: ResultStatusType; error: string };
    return <ErrorPage error={errorMessage.error} status={errorMessage.originalStatus}/>
  }
  return (
    <Table
      rowKey="id"
      dataSource={airports}
      columns={columns}
      onRow={(record) => ({
        className: 'cursor-pointer',
        onClick: () => navigate(`/airports/${record.id}`)
      })}/>
  );
};
