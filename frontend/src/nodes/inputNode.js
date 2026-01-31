import React from "react";
import BaseNode from "./BaseNode";

const InputNode = () => {
  return (
    <BaseNode
      title="Input"
      outputs={[{ id: "output" }]}
    >
      <input
        type="text"
        placeholder="Enter input"
        style={{ width: "100%", padding: "6px" }}
      />
    </BaseNode>
  );
};

export default InputNode;
export { InputNode };

