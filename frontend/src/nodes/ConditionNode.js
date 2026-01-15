import BaseNode from "./BaseNode";

export default function ConditionNode() {
  return (
    <BaseNode
      title="Condition"
      inputs={["input"]}
      outputs={["true", "false"]}
    >
      <p>Conditional logic</p>
    </BaseNode>
  );
}
