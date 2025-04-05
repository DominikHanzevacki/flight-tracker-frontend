import {Button, Card, Flex} from "antd";
import {PlusOutlined} from "@ant-design/icons";

interface IAirlinesHeaderProps {
  handleCreateModalOpen: () => void;
}

export const AirlinesHeader = ({handleCreateModalOpen}: IAirlinesHeaderProps) => {
  return (
    <Card className="border rounded-lg shadow-sm">
      <Flex justify="space-between" align="center">
        <h2 className="text-center text-2xl font-bold">Airlines</h2>
        <Button shape="circle"
          className="hover:!text-blue-light hover:!border-blue-light !text-blue-dark !border-blue-dark"
          onClick={handleCreateModalOpen}>
          <PlusOutlined/>
        </Button>
      </Flex>
    </Card>
  )
}
