import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";

import "../../styles/home.scss";

export const CardTemplate = props => {
	const { store, actions } = useContext(Context);

	return (
		<Card className="mb-2" style={{ width: "18rem" }}>
			<Card.Img className="cardTemplate" variant="top" src={props.src} />
			<Card.Body>
				<Card.Title className="titleCard">{props.name}</Card.Title>
				<Card.Text className="descriptionCard">{props.description}</Card.Text>
				<div className="d-flex justify-content-between">
					<Link to={props.category + props.name.replace(" ", "_")}>
						<button className="cardButton btn btn-outline-warning">More Details</button>
					</Link>
					<button className="btn btn-outline-warning" onClick={props.click}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</Card.Body>
		</Card>
	);
};
CardTemplate.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	click: PropTypes.func,
	url: PropTypes.string,
	index: PropTypes.number,
	category: PropTypes.string,
	description: PropTypes.string
};
