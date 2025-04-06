import {Card, Flex, Form, Input, Select, Spin} from "antd";
import {AirlinesTable} from "@pages/airlines/table/AirlinesTable";
import {AirlinesHeader} from "@pages/airlines/header/AirlinesHeader";
import {AppModal} from "@components/modal/AppModal";
import {ModalType} from "@interfaces/modal/enums/enums";
import {useAirlines} from "@pages/airlines/useAirlines";
import {AppBreadcrumbs} from "@components/breadcrumbs/AppBreadcrumbs";

const {Item} = Form;
export const Airlines = () => {
  const {
    t,
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
          <AppBreadcrumbs/>
          <AirlinesHeader handleCreateModalOpen={handleCreateModalOpen}/>
          <AirlinesTable handleEditModalOpen={handleEditModalOpen}
            handleDeleteModalOpen={handleDeleteModalOpen}/>
        </Flex>
      </Card>
      <AppModal name="airlines" modal={modal} onCreate={createAirline} onEdit={editAirline} onDelete={deleteAirline}
        deleteMessage={t('airlines.delete-message')}>
        {(modal?.type === ModalType.Create || modal?.type === ModalType.Edit) && (
          <div className="pt-3">
            <Item label={t('airlines.form.name')} name="name"
              rules={[{required: true, message: t('airlines.validations.name')}]}>
              <Input placeholder={t('airlines.placeholder.name')} maxLength={50} allowClear/>
            </Item>
            <Item label={t('airlines.form.country')} name="country_id"
              rules={[{required: true, message: t('airlines.validations.country')}]}>
              <Select placeholder={t('airlines.placeholder.country')} allowClear options={countries?.map(country => ({
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
