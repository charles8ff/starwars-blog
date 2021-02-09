import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Grouped from "./searchbar.jsx";
import { Favorites } from "../component/favorites.jsx";
import "../../styles/home.scss";

export const Navbars = () => {
	return (
		<>
			<Navbar className="navbar-css" expand="lg">
				<Container>
					<Link to="/">
						<Navbar.Brand>
							<img
								alt=""
								src="https://www.unioncosmos.com/wp-content/uploads/2017/01/Union-Cosmos-Star-Wars-Logo-Amarillo-PNG.png"
								width="130"
								height="50"
								className="d-inline-block align-top"
							/>{" "}
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto mr-5">
							<Link to="/" className="mx-4 buttonsMenu">
								Home
							</Link>
							<Link to="/planets/" className="mx-4 buttonsMenu">
								Planets
							</Link>
							<Link to="/people/" className="mx-4 buttonsMenu">
								People
							</Link>
							<Link to="/starships/" className="mx-4 buttonsMenu">
								StarShips
							</Link>
						</Nav>
						<Grouped />
						<Favorites />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
