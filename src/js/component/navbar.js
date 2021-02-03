import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export const Navbars = () => {
	return (
		<Navbar className="navbar">
			<Navbar.Brand href="#home">
				<img
					alt=""
					src="https://www.unioncosmos.com/wp-content/uploads/2017/01/Union-Cosmos-Star-Wars-Logo-Amarillo-PNG.png"
					width="130"
					height="50"
					className="d-inline-block align-top"
				/>{" "}
			</Navbar.Brand>
		</Navbar>
	);
};
