import { Route, Routes } from "react-router-dom";

import App from "./App";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Countries />} />
        <Route path="country/:name" element={<Country />} />
      </Route>
      <Route path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}