import { Handle } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div className="node">
      <div className="node-title">{title}</div>

      {inputs.map((id) => (
        <Handle
          key={id}
          type="target"
          position="left"
          id={id}
        />
      ))}

      <div className="node-content">
        {children}
      </div>

      {outputs.map((id) => (
        <Handle
          key={id}
          type="source"
          position="right"
          id={id}
        />
      ))}
    </div>
  );
}
