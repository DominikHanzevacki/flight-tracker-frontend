import type {ReactNode} from "react";
import {type ModalType} from "@/interfaces/modal/enums/enums";

export interface IModal<T extends { id: number }> {
  isModalOpen: boolean;
  type: ModalType;
  handleModalOpen: (modalType: ModalType, selectedRow?: T) => void;
  handleModalClose: () => void;
  selectedRow?: T,
}

export interface IModalProps<T extends { id: number }, CreatePayload, EditPayload> {
  modal: IModal<T>;
  name: string;
  onCreate?: (payload: CreatePayload) => void;
  onEdit?: (payload: EditPayload) => void;
  onDelete?: (rowId: number) => void;
  deleteMessage?: string;
  children?: ReactNode;
}
