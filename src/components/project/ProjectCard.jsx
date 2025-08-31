import "./Project.css";

// * Icon Imports
import GitHubIcon from "../../assets/icons/github-brands-square.svg";
import LinkIcon from "../../assets/icons/arrow-up-right-from-square-solid-full.svg";

export default function ProjectCard(props) {
	let { projectName, projectDescription, live_URL, github_URL } = props.projectCardData;
	return (
		<div className="project-card">
			<div className="project-img">
				<img src={live_URL} frameBorder="0"></img>
			</div>
			<div className="project-body">
				<h2 className="project-name">{projectName}</h2>
				<p className="project-description">{projectDescription}</p>
				<div className="project-links">
					<a href={live_URL} target="_blank" rel="noopener noreferrer">
						<button className="link-btn live-link-btn">
							Live Link <img src={LinkIcon} alt="Download Icon" />
						</button>
					</a>
					<a href={github_URL} target="_blank" rel="noopener noreferrer">
						<button className="link-btn github-link-btn">
							GitHub Link <img src={GitHubIcon} alt="Download Icon" />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
