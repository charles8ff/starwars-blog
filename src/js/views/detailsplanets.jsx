import React, { useState, useEffect, useContext, Fragment } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

import "../../styles/details.scss";

export const Detailsplanet = props => {
	const { store, actions } = useContext(Context);
	const param = useParams();

	let url = {};

	let newPlanet = store.planets.find(item => {
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
		<content className="container">
			<div className="card">
				<img
					className="imgDetails"
					src="https://images.unsplash.com/photo-1545156521-77bd85671d30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
				/>
				<h1>{store.details.name}</h1>
				<div className="detailList">
					<ul>
						<li>Diameter: {store.details.diameter} </li>
						<li>Population: {store.details.population}</li>
						<li>Climate: {store.details.climate}</li>
						<li>Terrain: {store.details.terrain}</li>
						<li>Orbital period: {store.details.orbital_period}</li>
						<li>Gravity: {store.details.gravity}</li>
						<li>Rotation period: {store.details.rotation_period}</li>
						<li>Surface water: {store.details.surface_water}</li>
					</ul>
				</div>
				<Link to="/planets/" className="button d-flex justify-content-center">
					<button className="btn btn-primary">GO BACK</button>
				</Link>
			</div>
		</content>
	);
};
