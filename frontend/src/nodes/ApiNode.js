import BaseNode from "./BaseNode";

export default function ApiNode() {
  return (
    <BaseNode
      title="API"
      inputs={["request"]}
      outputs={["response"]}
    >
      <p>API request</p>
    </BaseNode>
  );
}
