import React, { useState } from "react";

function FilteredData({ data, searchTerm }) {
  const filteredData = data
    .filter((item) =>
      item.marca.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reverse();

  return filteredData;
}

export default FilteredData;