import BaseNode from "./BaseNode";

export default function LLMNode() {
  return (
    <BaseNode
      title="LLM"
      inputs={["prompt"]}
      outputs={["response"]}
    >
      <p>Large Language Model</p>
    </BaseNode>
  );
}
