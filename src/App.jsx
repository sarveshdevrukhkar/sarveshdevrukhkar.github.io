import "./styles/App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./pages/about/About.jsx";
import Skill from './pages/skill/Skill.jsx';
import Project from "./pages/project/Project.jsx";
import Service from "./pages/service/Service.jsx";

export default function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Skill />
			<Project />
			<Service />
		</div>
	);
}
