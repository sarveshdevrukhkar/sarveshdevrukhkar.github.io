import "../../styles/App.css";
import "./Skill.css";

export default function skillCard(props) {
	let { title, skills } = props.props;
	return (
		<div className="skill-card">
			<div className="skill-card-header">
				<h2>{title}</h2>
			</div>
			<div className="skill-card-body">
				{skills.map((skill, index) => (
					<span className="skill" key={index}>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
}
