import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";
import type {ResultStatusType} from "antd/es/result";

interface IErrorPageProps {
  error: string;
  status: ResultStatusType;
}

export const ErrorPage = ({error, status}: IErrorPageProps) => {
  const navigate = useNavigate();
  return (
    <Result
      className="h-full flex items-center justify-center flex-col"
      status={status}
      title="Sorry, something went wrong."
      subTitle={error}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    />
  );
}
