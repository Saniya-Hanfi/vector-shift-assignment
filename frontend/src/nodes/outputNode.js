import React from "react";
import BaseNode from "./BaseNode";

const OutputNode = () => {
  return (
    <BaseNode
      title="Output"
      inputs={[{ id: "input" }]}
    >
      <div style={{ width: "100%", textAlign: "center", fontSize: "14px" }}>
        Output
      </div>
    </BaseNode>
  );
};

export default OutputNode;
export { OutputNode };
