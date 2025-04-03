import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Result
      className="h-full flex items-center justify-center flex-col"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    />
  );
}
