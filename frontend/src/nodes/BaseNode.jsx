import React from "react";
import { Handle, Position } from "reactflow";
import "./nodeStyles.css";

const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div className="base-node">
      <div className="node-header">{title}</div>

      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
        />
      ))}

      <div className="node-body">{children}</div>

      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
        />
      ))}
    </div>
  );
};

export default BaseNode;
