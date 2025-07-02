import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="header">
			<div className="nav-items">
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#skill">Skills</a></li>
					<li><a href="#project">Projects</a></li>
					<li><a href="#service">Services</a></li>
				</ul>
			</div>
		</nav>
	);
}
