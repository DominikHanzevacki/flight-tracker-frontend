import {Modal} from "antd";
import type {GenericModalProps} from "@interfaces/google-maps/interface";
import {useTranslation} from "react-i18next";


export const GoogleMapsModal = <T extends { id: number, name: string }, >({
  isModalOpen,
  handleModalClose,
  selectedRow,
  children
}: GenericModalProps<T>) => {
  const {t} = useTranslation();
  return (
    <Modal
      title={selectedRow?.name}
      open={isModalOpen}
      onCancel={handleModalClose}
      onOk={handleModalClose}
      okText={t('general.ok')}
      cancelText={t('general.cancel')}
      okButtonProps={{className: "!bg-blue-light hover:!bg-primary"}}
      cancelButtonProps={{className: "hover:!border-blue-light hover:!text-blue-light"}}
    >
      <div className="pt-3">
        {children}
      </div>
    </Modal>
  );
};
