import {useModal} from "@hooks/modal/useModal";
import {useGetCountriesQuery} from "@services/api/country/countriesSlice";
import {
  useCreateAirportMutation,
  useDeleteAirportMutation,
  useEditAirportMutation
} from "@services/api/airports/airportsSlice";
import {ModalType} from "@/interfaces/modal/enums/enums";
import type {IAirportCreatePayload} from "@/interfaces/airports/interface";
import type {IModal} from "@/interfaces/modal/interface";
import {useGetAirlinesQuery} from "@services/api/airlines/airlinesSlice";

export const useAirports = () => {
  const modal: IModal<IAirportCreatePayload> = useModal();
  const {data: countries, isLoading: countriesLoading} = useGetCountriesQuery();
  const {data: airlines, isLoading: airlinesLoading} = useGetAirlinesQuery();
  const [createAirport] = useCreateAirportMutation();
  const [editAirport] = useEditAirportMutation();
  const [deleteAirport] = useDeleteAirportMutation();
  const handleCreateModalOpen = () => modal.handleModalOpen(ModalType.Create);
  const handleEditModalOpen = (row: IAirportCreatePayload) => modal.handleModalOpen(ModalType.Edit, row);
  const handleDeleteModalOpen = (row: IAirportCreatePayload) => modal.handleModalOpen(ModalType.Delete, row);

  return {
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
  };
};
