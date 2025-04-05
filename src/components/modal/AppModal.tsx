import {Form, Modal} from "antd";
import type {IModalProps} from "@/interfaces/modal/interface";
import {ModalType} from "@/interfaces/modal/enums/enums";
import {useAppModal} from "./useAppModal";

export const AppModal = <T extends { id: number }, CreatePayload, EditPayload>(
  {
    name,
    modal,
    onCreate,
    onEdit,
    onDelete,
    deleteMessage = '',
    children
  }: IModalProps<T, CreatePayload, EditPayload>) => {
  const {
    form,
    handleModalTitle,
    onModalSubmit,
    onClose,
    onFormSubmit,
    isModalOpen,
    type
  } = useAppModal({name, modal, onCreate, onEdit, onDelete, deleteMessage});

  return (
    <Modal
      title={handleModalTitle()}
      open={isModalOpen}
      onCancel={onClose}
      onOk={onModalSubmit}
    >
      {type === ModalType.Delete ? (
        <span>{deleteMessage}</span>
      ) : (
        <Form name="AppModal"
          layout="vertical"
          form={form}
          onFinish={onFormSubmit}>
          {children}
        </Form>
      )}
    </Modal>
  )
}
