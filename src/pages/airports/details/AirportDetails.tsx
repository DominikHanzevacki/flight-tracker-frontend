import {Button, Card, Flex, Spin} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import {useGetAirportByIdQuery} from "@services/api/airports/airportsSlice";
import {NotFound} from "@pages/not-found/NotFound";
import type {ResultStatusType} from "antd/es/result";
import {ErrorPage} from "@pages/error-page/ErrorPage";

export const AirportDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data: airport, error, isLoading} = useGetAirportByIdQuery(id ? parseInt(id) : 0, {skip: !id});

  if (isLoading) {
    return <Spin className="w-full text-center" size="large"/>
  }

  if (error) {
    const errorMessage = error as { originalStatus: ResultStatusType; error: string };
    return <ErrorPage error={errorMessage.error} status={errorMessage.originalStatus}/>
  }

  if (!airport) {
    return <NotFound/>
  }

  return (
    <Card className="border rounded-lg shadow-sm">
      <Button className="mb-4 !bg-blue-light hover:!text-primary" type="primary" onClick={() => navigate(-1)}>Go
        Back</Button>
      <h2 className="text-2xl font-bold mb-4">{airport.name}</h2>
      <Card>
        <h3 className="text-xl font-semibold mb-4">Details</h3>
        <Flex gap={32} wrap="wrap">
          <Flex vertical>
            <label className="font-semibold mr-2">Country:</label>
            <span>{airport.country.name}</span>
          </Flex>
          <Flex vertical>
            <label className="font-semibold mr-2">Latitude:</label>
            <span>{airport.position.latitude}</span>
          </Flex>
          <Flex vertical>
            <label className="font-semibold mr-2">Longitude:</label>
            <span>{airport.position.longitude}</span>
          </Flex>
          <Flex vertical>
            <label className="font-semibold mr-2">Airlines:</label>
            <span>{airport.airlines.map(airline => airline.name).join(', ')}</span>
          </Flex>
        </Flex>
      </Card>
    </Card>
  );
};
