import {useTranslation} from "react-i18next";
import {useState} from "react";
import type {IAirport} from "@interfaces/airports/interface";
import {useGetAirportsQuery} from "@services/api/airports/airportsSlice";

export const useAirportsLiveLocations = () => {
  const {t} = useTranslation();
  const [selectedAirport, setSelectedAirport] = useState<IAirport | null>(null);
  const {data: airports, error, isLoading} = useGetAirportsQuery();
  const handleModalClose = () => {
    setSelectedAirport(null);
  };
  const handleMarkerClick = (airport: IAirport) => {
    setSelectedAirport(airport);
  };
  return {
    t,
    airports,
    error,
    isLoading,
    selectedAirport,
    handleModalClose,
    handleMarkerClick,
  }
}
