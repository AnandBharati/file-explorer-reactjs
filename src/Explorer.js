import { useState } from "react";
import Inner from "./Inner";
import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

const Explorer = ({ entity }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isFolder, items, name } = entity;
  const getIcon = () =>
    isFolder ? isExpanded ? <FaFolderOpen /> : <FaFolder /> : <FaFileAlt />;

  return (
    <div style={{ paddingLeft: "12px" }}>
      <div
        type="button"
        onClick={() => setIsExpanded((i) => !i)}
        style={{
          display: "flex",
          gap: "4px",
          fontSize: 20,
          color: "crimson",
          paddingBottom: "4px",
        }}
      >
        {getIcon()}
        {name}
      </div>
      {isExpanded && isFolder && items.map((item) => <Inner entity={item} />)}
    </div>
  );
};

export default Explorer;
