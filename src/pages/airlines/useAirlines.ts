import {useModal} from "@hooks/modal/useModal";
import {useGetCountriesQuery} from "@services/api/country/countriesSlice";
import {
  useCreateAirlineMutation,
  useDeleteAirlineMutation,
  useEditAirlineMutation
} from "@services/api/airlines/airlinesSlice";
import {ModalType} from "@interfaces/modal/enums/enums";
import type {IAirlineCreatePayload} from "@interfaces/airlines/interface";
import type {IModal} from "@interfaces/modal/interface";
import {useTranslation} from "react-i18next";

export const useAirlines = () => {
  const {t} = useTranslation();
  const modal: IModal<IAirlineCreatePayload> = useModal();
  const {data: countries, isLoading: countriesLoading} = useGetCountriesQuery();
  const [createAirline] = useCreateAirlineMutation();
  const [editAirline] = useEditAirlineMutation();
  const [deleteAirline] = useDeleteAirlineMutation();
  const handleCreateModalOpen = () => modal.handleModalOpen(ModalType.Create);
  const handleEditModalOpen = (row: IAirlineCreatePayload) => modal.handleModalOpen(ModalType.Edit, row);
  const handleDeleteModalOpen = (row: IAirlineCreatePayload) => modal.handleModalOpen(ModalType.Delete, row);

  return {
    t,
    modal,
    countries,
    countriesLoading,
    handleCreateModalOpen,
    handleEditModalOpen,
    handleDeleteModalOpen,
    createAirline,
    editAirline,
    deleteAirline
  }
}
