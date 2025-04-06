import {GoogleMap, LoadScriptNext, Marker} from "@react-google-maps/api";
import {Flex, Spin} from "antd";
import {GoogleMapsModal} from "@components/modal/google-maps/GoogleMapsModal";
import {ErrorPage} from "@pages/error-page/ErrorPage";
import type {ResultStatusType} from "antd/es/result";
import {useAirportsLiveLocations} from "@pages/airports/live-location/useAirportsLiveLocations";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
export const AirportsLiveLocations = () => {
  const {
    t,
    airports,
    error,
    isLoading,
    selectedAirport,
    handleModalClose,
    handleMarkerClick,
  } = useAirportsLiveLocations();
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
                <label className="font-semibold mr-2">{t('airports.table.country-name') + ':'}</label>
                <span>{selectedAirport.country.name}</span>
              </Flex>
              <Flex vertical>
                <label className="font-semibold mr-2">{t('airports.table.latitude') + ':'}</label>
                <span>{selectedAirport.position.latitude}</span>
              </Flex>
              <Flex vertical>
                <label className="font-semibold mr-2">{t('airports.table.longitude') + ':'}</label>
                <span>{selectedAirport.position.longitude}</span>
              </Flex>
            </Flex>
            <Flex className="w-full" vertical>
              <label className="font-semibold mr-2">{t('airports.table.airlines') + ':'}</label>
              <span>{selectedAirport.airlines.map(airline => airline.name).join(', ')}</span>
            </Flex>
          </Flex>
        </GoogleMapsModal>
      )}
    </>
  );
};
