import BaseNode from "./BaseNode";

export default function InputNode() {
  return (
    <BaseNode
      title="Input"
      outputs={["output"]}
    >
      <input
        placeholder="Enter input"
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
}
