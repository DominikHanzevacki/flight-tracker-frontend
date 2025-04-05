import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="warning"
      title="The item was not found."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Return to Home
        </Button>
      }
    />
  );
}
