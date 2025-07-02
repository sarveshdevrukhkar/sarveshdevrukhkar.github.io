import heroImg from "../../assets/logo.png";

export default function Hero() {
	return (
		<div id="hero">
			<div className="hero-img">
				<img src={heroImg} alt="Hero Image" />
			</div>
		</div>
	);
}
