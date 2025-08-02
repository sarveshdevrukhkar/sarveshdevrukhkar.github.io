import "./Hero.css";

// * Icon Imports
import GitHubIcon from "../../assets/icons/github-brands-circle.svg";
import LinkedinIcon from "../../assets/icons/linkedin-in-brands.svg";
import DownloadIcon from "../../assets/icons/download-solid.svg";

// * Data Imports.
import { URLs } from "../../data/constants.js"; // * URL Data Import.

let { GITHUB_URL, LINKEDIN_URL, RESUME_URL } = URLs; // Destructuring Data of ease of use.

export default function Hero() {
	return (
		<div id="hero">
			{/* Hero Image */}
			<div className="hero-img-box">
				<img src="logo.png" alt="Hero Image" id="hero-img" />
			</div>

			{/* Hero Name */}
			<div className="hero-name">
				<h1>SARVESH DEVRUKHKAR</h1>
			</div>

			{/* Hero Tagline */}
			<div className="hero-tagline">
				<h3>Ex. Web Developer Intern @CWD Limited | MERN Stack Web Developer</h3>
			</div>

			{/* Hero Social Handles */}
			<div className="hero-social-handles">
				<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
					<img src={GitHubIcon} alt="GitHub Icon" />
				</a>
				<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
					<img src={LinkedinIcon} alt="Linkedin Icon" />
				</a>
			</div>
			<div>
				<a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
					<button className="download-resume-btn">
						My Resume
						<img src={DownloadIcon} alt="Download Icon" />
					</button>
				</a>
			</div>
		</div>
	);
}
