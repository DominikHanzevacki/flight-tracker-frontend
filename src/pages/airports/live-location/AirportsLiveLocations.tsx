import {GoogleMap, LoadScriptNext, Marker} from "@react-google-maps/api";
import {useGetAirportsQuery} from "@services/api/airports/airportsSlice";
import {Flex, Spin} from "antd";
import {useState} from "react";
import type {IAirport} from "@/interfaces/airports/interface";
import {GoogleMapsModal} from "@components/modal/google-maps/GoogleMapsModal";
import {ErrorPage} from "@pages/error-page/ErrorPage";
import type {ResultStatusType} from "antd/es/result";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
export const AirportsLiveLocations = () => {
  const [selectedAirport, setSelectedAirport] = useState<IAirport | null>(null);
  const {data: airports, error, isLoading} = useGetAirportsQuery();
  const handleModalClose = () => {
    setSelectedAirport(null);
  };
  const handleMarkerClick = (airport: IAirport) => {
    setSelectedAirport(airport);
  };
  if (isLoading) return <Spin className="w-full text-center" size="large"/>;
  if (error) {
    const errorMessage = error as { originalStatus: ResultStatusType; error: string };
    return <ErrorPage error={errorMessage.error} status={errorMessage.originalStatus}/>
  }

  return (
    <>
      <LoadScriptNext googleMapsApiKey={apiKey} loadingElement={<Spin className="w-full text-center" size="large"/>}>
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          center={{
            lat: 45.1,
            lng: 15.2,
          }}
          zoom={7}
        >
          {airports?.map((airport) => (
            <Marker
              key={airport.id}
              position={{
                lat: parseFloat(airport.position.latitude.toString()),
                lng: parseFloat(airport.position.longitude.toString()),
              }}
              title={airport.name}
              onClick={() => handleMarkerClick(airport)}
            />
          ))}
        </GoogleMap>
      </LoadScriptNext>
      {selectedAirport && (
        <GoogleMapsModal
          selectedRow={selectedAirport}
          isModalOpen={true}
          handleModalClose={handleModalClose}
          handleModalOpen={handleModalClose}
        >
          <Flex gap={16} wrap="wrap">
            <Flex className="w-full" gap={32} wrap="wrap" justify="space-between">
              <Flex vertical>
                <label className="font-semibold mr-2">Country:</label>
                <span>{selectedAirport.country.name}</span>
              </Flex>
              <Flex vertical>
                <label className="font-semibold mr-2">Latitude:</label>
                <span>{selectedAirport.position.latitude}</span>
              </Flex>
              <Flex vertical>
                <label className="font-semibold mr-2">Longitude:</label>
                <span>{selectedAirport.position.longitude}</span>
              </Flex>
            </Flex>
            <Flex className="w-full" vertical>
              <label className="font-semibold mr-2">Airlines:</label>
              <span>{selectedAirport.airlines.map(airline => airline.name).join(', ')}</span>
            </Flex>
          </Flex>
        </GoogleMapsModal>
      )}
    </>
  );
};
