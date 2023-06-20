import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  margin-right: 10px;
`;

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="container-input">
      <label htmlFor="pesquisar">
        {" "}
        Pesquisar:
        <SearchInput
          type="text"
          placeholder=""
          value={searchTerm}
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}

export default SearchBar;
