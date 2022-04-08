import React from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import SearchComboBox from "../../components/searchComboBox/SearchComboBox";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <SearchComboBox />
    </div>
  );
}
