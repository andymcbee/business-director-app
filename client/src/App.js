import React from "react";
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Signin from "./views/Signin/Signin";
import BusinessPage from "./views/BusinessPage/BusinessPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/:mainBusCat/:busGeoLoc/:busSlug/"
            element={<BusinessPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
