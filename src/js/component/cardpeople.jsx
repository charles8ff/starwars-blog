import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export const Cards = props => (
	<>
		<Card style={{ width: "18rem" }} className="mb-5">
			<Card.Img variant="top" src={props.img} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<p>Eye color: {props.eyeColor}</p>
				<p>Gender: {props.gender}</p>
				<p>BirthYear: {props.birthyear}</p>
				<Button href={props.url} variant="primary">
					Go somewhere
				</Button>
			</Card.Body>
		</Card>
	</>
);

Cards.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string,
	eyeColor: PropTypes.string,
	gender: PropTypes.string,
	birthyear: PropTypes.string,
	url: PropTypes.string
};
