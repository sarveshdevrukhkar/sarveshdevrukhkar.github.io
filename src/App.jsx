import "./styles/App.css";
import Hero from "./components/hero/Hero.jsx";
import Skill from './pages/skill/Skill.jsx';
import Project from "./pages/project/Project.jsx";
import Service from "./pages/service/Service.jsx";

export default function App() {
	return (
		<div>
			<Hero />
			<Skill />
			<Project />
			<Service />
		</div>
	);
}
