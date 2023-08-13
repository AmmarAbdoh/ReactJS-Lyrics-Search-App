import "./Style/SearchBox.css";
import React, { useContext, useState } from "react";
import { Context } from "../Context";
const SearchBox = () => {
  const { setText } = useContext(Context);
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleButton = () => {
    setText(searchText);
  };
  return (
    <>
      <div className="search-box">
        <p className="title">Lyrics Search App</p>
        <input
          type="text"
          className="search-bar"
          value={searchText}
          onChange={handleChange}
        />
        <button
          type="button"
          className="button search-button"
          onClick={handleButton}
        >
          Search
        </button>
      </div>
    </>
  );
};
export default SearchBox;
