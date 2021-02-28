import React from "react";
import "./Header.css";
import image from "./../../Images/logo1.png";

const Header = () => {
	return (
		<div>
			<div className="headerpart">
				<div className="log">
					<img src={image} alt="" />
				</div>
				<div className="navBar">
					<nav>
						<a href="/About">About</a>
						<a href="/Users">Users</a>
						<a href="/Account">Account</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
