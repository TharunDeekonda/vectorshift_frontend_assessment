import BaseNode from "./BaseNode";

export default function OutputNode() {
  return (
    <BaseNode
      title="Output"
      inputs={["input"]}
    >
      <p>Final output</p>
    </BaseNode>
  );
}
