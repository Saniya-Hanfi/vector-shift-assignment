import React from "react";
import BaseNode from "./BaseNode";

const LLMNode = () => {
  return (
    <BaseNode
      title="LLM"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}
    >
      <div style={{ fontSize: "14px", textAlign: "center" }}>
        Large Language Model
      </div>
    </BaseNode>
  );
};

export default LLMNode;
export { LLMNode };
