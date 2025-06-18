import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="header">
			<div className="logo-container">
				<img
					src="https://avatars.githubusercontent.com/u/79737447"
					className="logo"
					alt="Logo"
				/>
				<span className="logo-text">Sarvesh Devrukhkar</span>
			</div>
			<div className="nav-items">
				<ul>
					<li>About Me</li>
					<li>Skills</li>
					<li>Projects</li>
					<li>Services</li>
				</ul>
			</div>
		</nav>
	);
}
