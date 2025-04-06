import {Modal} from "antd";
import type {ReactNode} from "react";
import type {IModal} from "@/interfaces/modal/interface";

interface GenericModalProps<T extends { id: number }> extends IModal<T> {
  children?: ReactNode;
}

export const GoogleMapsModal = <T extends { id: number, name: string }, >({
  isModalOpen,
  handleModalClose,
  selectedRow,
  children
}: GenericModalProps<T>) => {
  return (
    <Modal
      title={selectedRow?.name}
      open={isModalOpen}
      onCancel={handleModalClose}
      onOk={handleModalClose}
    >
      <div className="pt-3">
        {children}
      </div>
    </Modal>
  );
};
