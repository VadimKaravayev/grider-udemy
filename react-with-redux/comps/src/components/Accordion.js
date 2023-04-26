import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const renderedItems = items.map(({ id, label, content }, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={id}>
        <div
          onClick={() =>
            setExpandedIndex((curExpandedIndex) =>
              index === curExpandedIndex ? -1 : index
            )
          }
          className="flex items-center justify-between p-3 bg-gray-50 border-b cursor-pointer"
        >
          {label}
          {icon}
        </div>
        {isExpanded && <div className="p-5 border-b">{content}</div>}
      </div>
    );
  });
  return (
    <div className="container border-x border-t rounded">{renderedItems}</div>
  );
}

export default Accordion;
