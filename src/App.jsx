import "./styles/App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/pages/about/About.jsx";
import Skill from './components/pages/skill/Skill.jsx';
import Project from "./components/pages/project/Project.jsx";
import Service from "./components/pages/service/Service.jsx";

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
