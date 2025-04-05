import {Card, Flex, Form, Input, Select, Spin} from "antd";
import {AirportsTable} from "@pages/airports/table/AirportsTable";
import {AirportsHeader} from "@pages/airports/header/AirportsHeader";
import {AppModal} from "@components/modal/AppModal";
import {ModalType} from "@/interfaces/modal/enums/enums";
import {useAirports} from "@pages/airports/useAirports";

const {Item} = Form;
export const Airports = () => {
  const {
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
          <AirportsHeader handleCreateModalOpen={handleCreateModalOpen}/>
          <AirportsTable handleEditModalOpen={handleEditModalOpen}
            handleDeleteModalOpen={handleDeleteModalOpen}/>
        </Flex>
      </Card>
      <AppModal name="airport" modal={modal} onCreate={createAirport} onEdit={editAirport} onDelete={deleteAirport}
        deleteMessage="Are you sure you want to delete this airport?">
        {(modal?.type === ModalType.Create || modal?.type === ModalType.Edit) && (
          <div className="pt-3">
            <Item label="Name" name="name"
              rules={[{required: true, message: 'Please input airport name!'}]}>
              <Input placeholder="Airport name" maxLength={50}/>
            </Item>
            <Item label="Country" name="country_id"
              rules={[{required: true, message: 'Please select a country!'}]}>
              <Select placeholder="Select country" options={countries?.map(country => ({
                label: country.name,
                value: country.id
              })) ?? []}/>
            </Item>
            <Item label="Airlines" name="airlines"
              rules={[{required: true, message: 'Please select airlines!'}]}>
              <Select mode="multiple" placeholder="Select airlines"
                options={airlines?.map(airline => ({label: airline.name, value: airline.id})) ?? []}/>
            </Item>
            <Item label="Position">
              <Flex gap={16} justify="space-between" align="center">
                <Item className="w-[50%]" name={['position', 'latitude']}
                  rules={[{required: true, message: 'Please input latitude!'}]}>
                  <Input type="number" placeholder="Latitude"/>
                </Item>
                <Item className="w-[50%]" name={['position', 'longitude']}
                  rules={[{required: true, message: 'Please input longitude!'}]}>
                  <Input type="number" placeholder="Longitude"/>
                </Item>
              </Flex>
            </Item>
          </div>
        )}
      </AppModal>
    </>
  )
}
