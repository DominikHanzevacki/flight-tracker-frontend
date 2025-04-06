import {useState} from 'react';
import {ModalType} from "@interfaces/modal/enums/enums";
import type {IModal} from "@interfaces/modal/interface";

export const useModal = <T extends { id: number }>(initialState = false): IModal<T> => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  const [selectedRow, setSelectedRow] = useState<T>();
  const [type, setType] = useState<ModalType>(ModalType.Create);

  const handleModalOpen = (modalType: ModalType, selectedRow?: T) => {
    setType(modalType);
    setIsModalOpen(true);
    setSelectedRow(selectedRow)
  };
  const handleModalClose = () => setIsModalOpen(false);

  return {
    isModalOpen,
    type,
    selectedRow,
    handleModalOpen,
    handleModalClose,
  };
};
