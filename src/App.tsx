import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout.tsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.tsx"));
const CampersPage = lazy(() => import("./pages/CampersPage/CampersPage.tsx"));
const CampersDetailsPage = lazy(
  () => import("./pages/CampersDetailsPage/CampersDetailsPage.tsx")
);
const CampersDetailsFeatures = lazy(
  () => import("./components/CampersDetailsFeatures/CampersDetailsFeatures.tsx")
);
const CampersDetailsReviews = lazy(
  () => import("./components/CampersDetailsReviews/CampersDetailsReviews.tsx")
);
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.tsx")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/campers" element={<CampersPage />} />
          <Route path="/campers/:id" element={<CampersDetailsPage />}>
            <Route path="features" element={<CampersDetailsFeatures />} />
            <Route path="reviews" element={<CampersDetailsReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
