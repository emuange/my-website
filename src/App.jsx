import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Article from "./pages/Article";
import Photography from "./pages/Photography";
import PhotoSeries from "./pages/PhotoSeries";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./styles/globals.css";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Article />} />

        <Route path="/photography" element={<Photography />} />
        <Route path="/photography/:slug" element={<PhotoSeries />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Project />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}