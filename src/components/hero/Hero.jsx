import "./Hero.css";
import heroImg from "../../assets/logo.png";

export default function Hero() {
	return (
		<div id="hero">
			<div className="hero-img">
				<img src={heroImg} alt="Hero Image" id="hero" />
			</div>
			<div className="hero-name">
				<h1>SARVESH DEVRUKHKAR</h1>
			</div>
			<div className="hero-headline">
				<h2>MERN Stack Web Developer</h2>
			</div>
			<div className="hero-tagline">
				<h3>Ex. Web Developer Intern @CWD Limited | MERN Stack Web Developer | React.js | Node.js | Express.js | MongoDB | JavaScript | TypeScript | jQuery | Java (DSA) | Git</h3>
			</div>
		</div>
	);
}
