import {Card, Flex, Form, Input, Select, Spin} from "antd";
import {AirlinesTable} from "@pages/airlines/table/AirlinesTable";
import {AirlinesHeader} from "@pages/airlines/header/AirlinesHeader";
import {AppModal} from "@components/modal/AppModal";
import {ModalType} from "@/interfaces/modal/enums/enums";
import {useAirlines} from "@pages/airlines/useAirlines";

const {Item} = Form;
export const Airlines = () => {
  const {
    modal,
    countries,
    countriesLoading,
    handleCreateModalOpen,
    handleEditModalOpen,
    handleDeleteModalOpen,
    createAirline,
    editAirline,
    deleteAirline
  } = useAirlines();

  if (countriesLoading) {
    return <Spin className="w-full text-center" size="large"/>
  }

  return (
    <>
      <Card className="border rounded-lg shadow-sm">
        <Flex vertical gap={16}>
          <AirlinesHeader handleCreateModalOpen={handleCreateModalOpen}/>
          <AirlinesTable handleEditModalOpen={handleEditModalOpen}
            handleDeleteModalOpen={handleDeleteModalOpen}/>
        </Flex>
      </Card>
      <AppModal name="airline" modal={modal} onCreate={createAirline} onEdit={editAirline} onDelete={deleteAirline}
        deleteMessage="Are you sure you want to delete this airline?">
        {(modal.type === ModalType.Create || modal.type === ModalType.Edit) && (
          <div className="pt-3">
            <Item label="Name" name="name"
              rules={[{required: true, message: 'Please input airline name!'}]}>
              <Input/>
            </Item>
            <Item label="Country" name="country_id"
              rules={[{required: true, message: 'Please select a country!'}]}>
              <Select options={countries?.map(country => ({
                label: country.name,
                value: country.id
              })) ?? []}/>
            </Item>
          </div>
        )}
      </AppModal>
    </>
  )
}
