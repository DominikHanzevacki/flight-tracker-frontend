import {Button, Card, Col, Row, Spin} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import {useGetAirlineByIdQuery} from "@services/api/airlinesSlice";
import {NotFound} from "@pages/not-found/NotFound";

export const AirlineDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data: airline, error, isLoading} = useGetAirlineByIdQuery(id ? parseInt(id) : 0, {skip: !id});

  if (isLoading) {
    return <Spin className="w-full text-center" size="large"/>
  }

  if (error || !airline) {
    return <NotFound/>;
  }

  return (
    <Card className="border rounded-lg shadow-sm">
      <Button className="mb-4 !bg-blue-light  hover:!text-primary" type="primary" onClick={() => navigate(-1)}>Go
        Back</Button>
      <h2 className="text-2xl font-bold mb-4">{airline.name}</h2>
      <Card>
        <h3 className="text-xl font-semibold mb-4">Details</h3>
        <Row gutter={[16, 16]}>
          <Col span="6">
            <label className="font-semibold mr-2">Country:</label>
            <span>{airline.country.name}</span>
          </Col>
          <Col span="6">
            <label className="font-semibold mr-2">Country Code:</label>
            <span>{airline.country.code}</span>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};
