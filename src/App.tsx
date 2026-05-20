import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}