import "../../styles/App.css";
import "./Project.css";

import ProjectCard from "./ProjectCard";
import { projectCards } from "../../data/projects";
import { Link } from "react-router-dom";

export default function Project() {
	return (
		<div id="project">
			<div id="sectionTitle">
				<h1 className="section-title">Project</h1>
				<p className="section-title-description">Explore My Work</p>
			</div>

			<div className="project-card-container">
				{projectCards.map((projectCard, index) => (
					<ProjectCard key={index} projectCardData={projectCard} />
				))}
			</div>

			<div className="project-see-more">
				<Link to="/project">
					<button className="download-resume-btn">See more...</button>
				</Link>
			</div>
		</div>
	);
}
