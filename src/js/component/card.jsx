import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import "../../styles/home.scss";

export const Cardplanets = props => {
	return (
		<Card className="mb-2" style={{ width: "18rem" }}>
			<Card.Img className="cardTemplate" variant="top" src={props.src} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>Oohh que planeta tan chulo.</Card.Text>
				<div className="d-flex justify-content-between">
					<Button variant="primary">Go somewhere</Button>
					<button className="btn btn-success" onClick={props.click}>
						<i className="far fa-heart" />
					</button>
				</div>
			</Card.Body>
		</Card>
	);
};
Cardplanets.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	click: PropTypes.any
};
