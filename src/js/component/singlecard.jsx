import React, { Component } from "react";

import { propTypes } from "react-bootstrap/esm/Image";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import PropTypes from "prop-types";

export const Singlecard = props => (
	<Card className="text-center">
		{/* <Card.Img variant="top" src={props.img} /> */}
		<Card.Body>
			<Card.Title>{props.name}</Card.Title>
			<Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
			<Button variant="primary">Go somewhere</Button>
		</Card.Body>
		<Card.Footer className="text-muted">2 days ago</Card.Footer>
	</Card>
);

Singlecard.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string
};
