import {ModalType} from "@/interfaces/modal/enums/enums";
import {useEffect} from "react";
import type {IModalProps} from "@/interfaces/modal/interface";
import {Form} from "antd";

export const useAppModal = <T extends { id: number }, CreatePayload, EditPayload>(
  {
    name,
    modal,
    onCreate,
    onEdit,
    onDelete,
    deleteMessage = ''
  }: IModalProps<T, CreatePayload, EditPayload>) => {
  const {selectedRow, type, isModalOpen, handleModalClose} = modal;
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedRow) {
      form.setFieldsValue(selectedRow);
    }
  }, [form, selectedRow]);

  const handleModalTitle = (): string => {
    switch (type) {
    case ModalType.Create:
      return `Create ${name}`;
    case ModalType.Edit:
      return `Edit ${name}`;
    case ModalType.Delete:
      return `Delete ${name}`;
    default:
      return '';
    }
  }

  const onModalSubmit = () => {
    if (type === ModalType.Delete) {
      const emptyDeleteFormValue = {} as CreatePayload;
      onFormSubmit(emptyDeleteFormValue)
    } else {
      form.submit();
    }
  }

  const onFormSubmit = (formValues: CreatePayload) => {
    switch (type) {
    case ModalType.Create:
      if (onCreate) {
        onCreate(formValues);
      }
      break;
    case ModalType.Edit:
      if (onEdit && selectedRow) {
        const payload = {
          id: selectedRow.id ?? 0,
          body: formValues
        }
        onEdit(payload as EditPayload);
      }
      break;
    case ModalType.Delete:
      if (onDelete && selectedRow) {
        const payload = selectedRow.id ?? 0;
        onDelete(payload);
      }
      break;
    default:
      break;
    }
    onClose();
  };

  const onClose = () => {
    form.resetFields();
    handleModalClose();
  }

  return {
    form,
    handleModalTitle,
    onModalSubmit,
    onFormSubmit,
    onClose,
    isModalOpen,
    type,
    deleteMessage
  };
}
