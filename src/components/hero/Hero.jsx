import "./Hero.css";
import GitHubIcon from "../../assets/icons/github-brands.svg";

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
				<a href="">
					<img src={GitHubIcon} alt="GitHub Icon" />
				</a>
			</div>
		</div>
	);
}
