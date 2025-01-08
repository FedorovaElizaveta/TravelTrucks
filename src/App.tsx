import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout.tsx";

const HomePage = lazy(() => import("./components/HomePage/HomePage.tsx"));
// const CampersPage = lazy(
//   () => import("./components/CampersPage/CampersPage.tsx")
// );
// const CampersDetails = lazy(
//   () => import("./components/CampersDetails/CampersDetails.tsx")
// );

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/campers" element={<CampersPage />} />
        <Route path="/campers/:id" element={<CampersDetails />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
