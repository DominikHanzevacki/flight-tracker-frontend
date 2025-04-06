import {useGetAirlinesQuery} from "@services/api/airlines/airlinesSlice";
import {Flex, Spin, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import type {IAirline, IAirlineTableProps} from "@interfaces/airlines/interface";
import type {ColumnGroupType, ColumnsType} from "antd/es/table";
import {useNavigate} from "react-router-dom";
import type {ResultStatusType} from "antd/es/result";
import {ErrorPage} from "@pages/error-page/ErrorPage";
import {useTranslation} from "react-i18next";

export const AirlinesTable = ({handleEditModalOpen, handleDeleteModalOpen}: IAirlineTableProps) => {
  const {t} = useTranslation();
  const {data: airlines, error, isLoading} = useGetAirlinesQuery();
  const navigate = useNavigate();
  const columns: ColumnsType<IAirline> = [
    {
      title: t('airlines.table.name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('airlines.table.country-name'),
      dataIndex: ['country', 'name'],
      key: 'countryName',
      responsive: ['sm'],
    },
    {
      title: t('airlines.table.country-code'),
      dataIndex: ['country', 'code'],
      key: 'countryCode',
      responsive: ['md'],
    },
    {
      title: t('general.actions'),
      key: 'actions',
      render: (_: ColumnGroupType<IAirline>, record: IAirline) => (
        <Flex gap={16} justify="start" align="center">
          <EditOutlined className="!text-blue-dark hover:!text-blue-light"
            onClick={(e) => {
              e.stopPropagation();
              handleEditModalOpen({
                ...record,
                country_id: record.country.id,
              })
            }}/>
          <DeleteOutlined className="!text-danger-dark hover:!text-danger-light"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteModalOpen({
                ...record,
                country_id: record.country.id,
              })
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
      dataSource={airlines}
      columns={columns}
      onRow={(record) => ({
        className: 'cursor-pointer',
        onClick: () => navigate(`/airlines/${record.id}`)
      })}/>
  )
}
