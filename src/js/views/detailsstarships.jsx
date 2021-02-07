import React, { useState, useEffect, useContext, Fragment } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import "../../styles/details.scss";

export const Detailsstarships = props => {
	const { store, actions } = useContext(Context);
	const param = useParams();
	let url = {};

	let newStarship = store.starShipsList.find(item => {
		if (item.name == param.id.replace("_", " ")) return (url = item);
	});

	const getUrl = () => {
		let getUrl = Object.values(url);
		return getUrl[2];
	};

	useEffect(
		() => {
			actions.getDetails(getUrl());
		},
		[getUrl() != undefined]
	);

	return (
		<div className="container">
			<div className="card">
				<img
					className="imgDetails"
					src="https://dam.smashmexico.com.mx/wp-content/uploads/2018/08/17120204/El-Halco%CC%81n-Milenario-Star-Wars.jpg"
				/>
				<h1>{store.details.name}</h1>
				<div className="detailList">
					<ul className="ulClass">
						<li>Model: {store.details.model} </li>
						<li>Starship class: {store.details.starship_class}</li>
						<li>Cost in credits: {store.details.cost_in_credits}</li>
						<li>Length: {store.details.length}</li>
						<li>Crew: {store.details.crew}</li>
						<li>Passengers: {store.details.passengers}</li>
						<li>Max atmosphering speed: {store.details.max_atmosphering_speed}</li>
						<li>Hyperdrive rating: {store.details.hyperdrive_rating}</li>
						<li>MGLT: {store.details.MGLT}</li>
						<li>Cargo capacity: {store.details.cargo_capacity}</li>
						<li>Consumables: {store.details.consumables}</li>
					</ul>
				</div>
				<Link to="/starships/" className="button d-flex justify-content-center">
					<button className="btn btn-primary">GO BACK</button>
				</Link>
			</div>
		</div>
	);
};
