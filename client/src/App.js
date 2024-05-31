import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";
import NotFound from "./NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Movie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
