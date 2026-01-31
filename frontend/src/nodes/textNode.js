import React, { useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./BaseNode";

const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;

export const TextNode = () => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const matches = [...text.matchAll(VARIABLE_REGEX)];
    const uniqueVars = [...new Set(matches.map((m) => m[1]))];
    setVariables(uniqueVars);
  }, [text]);

  return (
    <BaseNode title="Text" outputs={[{ id: "output" }]}>
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={variable}
          style={{ top: 50 + index * 20 }}
        />
      ))}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text... use {{variable}}"
        style={{
          width: "100%",
          minHeight: "40px",
          resize: "none",
        }}
      />
    </BaseNode>
  );
};


