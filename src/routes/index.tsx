import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "src/pages/Landing";
import OrphanagesMap from "src/pages/OrphanagesMap";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<OrphanagesMap />} />
      </Routes>
    </BrowserRouter>
  );
}
