import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="header">
			<div className="nav-items">
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#services">Services</a></li>
				</ul>
			</div>
		</nav>
	);
}
