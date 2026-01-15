import BaseNode from "./BaseNode";

export default function MergeNode() {
  return (
    <BaseNode
      title="Merge"
      inputs={["left", "right"]}
      outputs={["output"]}
    >
      <p>Merge inputs</p>
    </BaseNode>
  );
}
