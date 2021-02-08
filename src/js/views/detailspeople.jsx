import React, { useState, useEffect, useContext, Fragment } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import "../../styles/details.scss";

export const Detailspeople = props => {
	const { store, actions } = useContext(Context);
	const param = useParams();

	let url = {};

	let newPeople = store.characters.find(item => {
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
					src="https://www.wallpapertip.com/wmimgs/41-419911_darth-vader-wallpaper-4k.jpg"
				/>
				<h1>{store.details.name}</h1>
				<div className="detailList">
					<ul className="ulClass">
						<li>Height: {store.details.height} </li>
						<li>Mass: {store.details.mass}</li>
						<li>Hair color: {store.details.hair_color}</li>
						<li>Eye color: {store.details.eye_color}</li>
						<li>Birth year: {store.details.birth_year}</li>
						<li>Gender: {store.details.gender}</li>
					</ul>
				</div>
				<Link to="/people/" className="button d-flex justify-content-center">
					<button className="btn btn-warning">GO BACK</button>
				</Link>
			</div>
		</content>
	);
};
