import {useGetAirlinesQuery} from "@services/api/airlinesSlice";
import {Flex, Spin, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import type {IAirlines, IAirlinesTableProps} from "@/interfaces/airlines/interface";
import type {ColumnGroupType} from "antd/es/table";

export const AirlinesTable = ({handleEditModalOpen, handleDeleteModalOpen}: IAirlinesTableProps) => {
  const {data: airlines, error, isLoading} = useGetAirlinesQuery();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Country name',
      dataIndex: ['country', 'name'],
      key: 'countryName',
    },
    {
      title: 'Country code',
      dataIndex: ['country', 'code'],
      key: 'countryCode',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: ColumnGroupType<IAirlines>, record: IAirlines) => (
        <Flex gap={16} justify="start" align="center">
          <EditOutlined className="!text-blue-dark hover:!text-blue-light"
            onClick={() => handleEditModalOpen({
              id: record.id,
              name: record.name,
              country_id: record.country.id,
            })}/>
          <DeleteOutlined className="!text-danger-dark hover:!text-danger-light"
            onClick={() => handleDeleteModalOpen({
              id: record.id,
              name: record.name,
              country_id: record.country.id,
            })}/>
        </Flex>
      ),
    },
  ];
  if (isLoading) return <Spin className="w-full text-center" size="large"/>;
  if (error) return <div>Error loading airlines</div>;
  return (
    <Table rowKey="id" dataSource={airlines} columns={columns}/>
  )
}
