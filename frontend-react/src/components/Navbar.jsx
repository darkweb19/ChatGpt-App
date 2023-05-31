import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
	return (
		<div className="container">
			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
					<Link
						className="navbar-brand text-dark font-weight-bold"
						to="/"
					>
						Chat-JPT
					</Link>
					<ul className="nav">
						<li className="nav-item">
							<Link className="nav-link mx-3" to="/chat">
								Chat
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link mx-3" to="/image">
								Image
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
