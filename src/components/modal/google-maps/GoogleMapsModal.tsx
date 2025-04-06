import {Button, Modal} from "antd";
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
      footer={[
        <Button key="close" type="primary" onClick={handleModalClose} className="!bg-blue-light hover:!bg-primary">
          {t('general.close')}
        </Button>
      ]}
    >
      <div className="pt-3">
        {children}
      </div>
    </Modal>
  );
};
