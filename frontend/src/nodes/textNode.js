import { useState } from "react";
import BaseNode from "./BaseNode";

export default function TextNode() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const regex = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;
  const variables = [...text.matchAll(regex)].map(m => m[1]);

  return (
    <BaseNode
      title="Text"
      inputs={variables}
      outputs={["output"]}
    >
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        style={{ width: "100%", resize: "none" }}
      />
    </BaseNode>
  );
}
