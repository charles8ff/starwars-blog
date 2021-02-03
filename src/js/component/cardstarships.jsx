import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const CardStarShips = props => {
	return (
		<Card style={{ width: "18rem" }} className="mt-3">
			<Card.Img variant="top" src={props.imgDefault} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text />
				<div className="d-flex justify-content-between">
					<Button variant="secondary">Go to Ship</Button>
					<Button variant="primary">Favorite</Button>
				</div>
			</Card.Body>
		</Card>
	);
};
CardStarShips.propTypes = {
	name: PropTypes.string,
	imgDefault: PropTypes.string
};
export default CardStarShips;
