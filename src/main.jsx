// * Setting up React Router DOM.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// * Importing Pages
import App from "./App.jsx";
import About from "./pages/about/About.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Skill from "./pages/skill/Skill.jsx";
import Project from "./pages/project/Project.jsx";
import Service from "./pages/service/Service.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/skill" element={<Skill />} />
				<Route path="/project" element={<Project />} />
				<Route path="/service" element={<Service />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
