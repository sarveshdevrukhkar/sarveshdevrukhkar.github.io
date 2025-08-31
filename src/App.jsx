import "./styles/App.css";
import Home from "./pages/home/Home.jsx";
import Skill from "./components/skill/Skill.jsx";
import Project from "./components/project/Project.jsx";
import Footer from "./components/footer/Footer.jsx";

export default function App() {
	return (
		<div>
			<Home />
			<Skill />
			<Project />
			<Footer />
		</div>
	);
}
