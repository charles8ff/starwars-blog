import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cards = props => {
	return (
		<>
			<Card style={{ width: "18rem" }} className="mb-5">
				<Card.Img variant="top" src={props.img} />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<p>Eye color: {props.eyeColor}</p>
					<p>Gender: {props.gender}</p>
					<p>BirthYear: {props.birthyear}</p>
					<Link to={props.url}>
						<Button variant="primary">Press to Go</Button>
					</Link>
				</Card.Body>
			</Card>
		</>
	);
};
Cards.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string,
	eyeColor: PropTypes.string,
	gender: PropTypes.string,
	birthyear: PropTypes.string,
	url: PropTypes.object
};
