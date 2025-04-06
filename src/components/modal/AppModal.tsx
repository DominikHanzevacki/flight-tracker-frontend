import {Form, Modal} from "antd";
import type {IModalProps} from "@interfaces/modal/interface";
import {ModalType} from "@interfaces/modal/enums/enums";
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
    t,
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
      okText={type === ModalType.Delete ? t('general.delete') : t('general.submit')}
      cancelText={t('general.cancel')}
      okButtonProps={{className: "!bg-blue-light hover:!bg-primary"}}
      cancelButtonProps={{className: "hover:!border-blue-light hover:!text-blue-light"}}
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
