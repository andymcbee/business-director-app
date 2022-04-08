import React from "react";
import SearchInput from "../searchInput/SearchInput";
import "./styles.css";
import { Button } from "@mui/material";

export default function SearchComboBox() {
  return (
    <div className="SearchComboBox">
      <div className="searchWrapper">
        <div className="searchItem">
          <SearchInput />
        </div>
        <div className="searchItem">
          <SearchInput />
        </div>
        <div className="searchItem">
          <Button variant="contained">Contained</Button>
        </div>
      </div>
    </div>
  );
}
