import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<div className="nav-items">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/project">Projects</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		</nav>
	);
}
