import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    console.log("Label", label);
    console.log("SortBy", sortBy);
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    setSortOrder((currentSortOrder) => {
      switch (currentSortOrder) {
        case "asc":
          return "desc";
        case "desc":
          return null;
        default:
          return "asc";
      }
    });
    setSortBy(sortOrder === "desc" ? null : label);
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(({ label }) => label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      return (
        (typeof valueA === "string"
          ? valueA.localeCompare(valueB)
          : valueA - valueB) * reverseOrder
      );
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    handleClick,
  };
}

export default useSort;
