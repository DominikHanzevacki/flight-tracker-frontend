import {Card, Flex, Form, Input, Select, Spin} from "antd";
import {AirportsTable} from "@pages/airports/table/AirportsTable";
import {AirportsHeader} from "@pages/airports/header/AirportsHeader";
import {AppModal} from "@components/modal/AppModal";
import {ModalType} from "@interfaces/modal/enums/enums";
import {useAirports} from "@pages/airports/useAirports";
import {AppBreadcrumbs} from "@components/breadcrumbs/AppBreadcrumbs";

const {Item} = Form;
export const Airports = () => {
  const {
    t,
    modal,
    countries,
    countriesLoading,
    airlines,
    airlinesLoading,
    handleCreateModalOpen,
    handleEditModalOpen,
    handleDeleteModalOpen,
    createAirport,
    editAirport,
    deleteAirport
  } = useAirports();

  if (countriesLoading || airlinesLoading) {
    return <Spin className="w-full text-center" size="large"/>
  }

  return (
    <>
      <Card className="border rounded-lg shadow-sm">
        <Flex vertical gap={16}>
          <AppBreadcrumbs/>
          <AirportsHeader handleCreateModalOpen={handleCreateModalOpen}/>
          <AirportsTable handleEditModalOpen={handleEditModalOpen}
            handleDeleteModalOpen={handleDeleteModalOpen}/>
        </Flex>
      </Card>
      <AppModal name="airports" modal={modal} onCreate={createAirport} onEdit={editAirport} onDelete={deleteAirport}
        deleteMessage={t('airports.delete-message')}>
        {(modal?.type === ModalType.Create || modal?.type === ModalType.Edit) && (
          <div className="pt-3">
            <Item label={t('airports.form.name')} name="name"
              rules={[{required: true, message: t('airports.validations.name')}]}>
              <Input placeholder={t('airports.placeholder.name')} maxLength={50} allowClear/>
            </Item>
            <Item label={t('airports.form.country')} name="country_id"
              rules={[{required: true, message: t('airports.validations.country')}]}>
              <Select placeholder={t('airports.placeholder.country')} allowClear options={countries?.map(country => ({
                label: country.name,
                value: country.id
              })) ?? []}/>
            </Item>
            <Item label={t('airports.form.airlines')} name="airlines"
              rules={[{required: true, message: t('airports.validations.airlines')}]}>
              <Select mode="multiple" allowClear placeholder={t('airports.placeholder.airlines')}
                options={airlines?.map(airline => ({label: airline.name, value: airline.id})) ?? []}/>
            </Item>
            <Item label={t('airports.form.position')}>
              <Flex gap={16} justify="space-between" align="center">
                <Item className="w-[50%]" name={['position', 'latitude']}
                  rules={[{required: true, message: t('airports.validations.latitude')}]}>
                  <Input type="number" allowClear placeholder={t('airports.placeholder.latitude')}/>
                </Item>
                <Item className="w-[50%]" name={['position', 'longitude']}
                  rules={[{required: true, message: t('airports.validations.longitude')}]}>
                  <Input type="number" allowClear placeholder={t('airports.placeholder.longitude')}/>
                </Item>
              </Flex>
            </Item>
          </div>
        )}
      </AppModal>
    </>
  )
}
