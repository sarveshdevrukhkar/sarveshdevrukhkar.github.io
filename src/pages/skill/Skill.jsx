import "../../styles/App.css";
import "./Skill.css";

import SkillCard from "./skillCard";
import { skillCard } from "../../data/skills";

export default function Skill() {
	return (
		<div id="skill">
			<h1 className="section-title">My Skills</h1>
			<p className="section-title-description">Explore My Work</p>

			<div className="skills-card-container">
				{skillCard.map((skillCard, index) => (
					<SkillCard key={index} props={skillCard} />
				))}
			</div>
		</div>
	);
}
