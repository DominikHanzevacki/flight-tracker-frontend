import {useGetAirlinesQuery} from "@services/api/airlines/airlinesSlice";
import {Flex, Spin, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import type {IAirlines, IAirlinesTableProps} from "@/interfaces/airlines/interface";
import type {ColumnGroupType, ColumnsType} from "antd/es/table";
import {useNavigate} from "react-router-dom";

export const AirlinesTable = ({handleEditModalOpen, handleDeleteModalOpen}: IAirlinesTableProps) => {
  const {data: airlines, error, isLoading} = useGetAirlinesQuery();
  const navigate = useNavigate();
  const columns: ColumnsType<IAirlines> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Country name',
      dataIndex: ['country', 'name'],
      key: 'countryName',
      responsive: ['sm'],
    },
    {
      title: 'Country code',
      dataIndex: ['country', 'code'],
      key: 'countryCode',
      responsive: ['md'],
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: ColumnGroupType<IAirlines>, record: IAirlines) => (
        <Flex gap={16} justify="start" align="center">
          <EditOutlined className="!text-blue-dark hover:!text-blue-light"
            onClick={(e) => {
              e.stopPropagation();
              handleEditModalOpen({
                id: record.id,
                name: record.name,
                country_id: record.country.id,
              })
            }}/>
          <DeleteOutlined className="!text-danger-dark hover:!text-danger-light"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteModalOpen({
                id: record.id,
                name: record.name,
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
  if (error) return <div>Error loading airlines</div>;
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
