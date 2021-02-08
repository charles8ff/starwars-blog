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
		<content className="container d-flex justify-content-center">
			<div className="card">
				<img
					className="imgDetails"
					src="https://www.wallpapertip.com/wmimgs/41-419911_darth-vader-wallpaper-4k.jpg"
				/>
				<h1 className="detailCardTitle bg-warning">{store.details.name}</h1>
				<div className="detailList">
					<ul className="ulClass">
						<li className="liClass">
							Height:
							<span className="spanDetail rounded">{store.details.height}</span>
						</li>
						<li className="liClass">
							Mass:
							<span className="spanDetail rounded">{store.details.mass}</span>
						</li>
						<li className="liClass">
							Hair color:
							<span className="spanDetail rounded">{store.details.hair_color}</span>
						</li>
						<li className="liClass">
							Eye color:
							<span className="spanDetail rounded"> {store.details.eye_color}</span>
						</li>
						<li className="liClass">
							Birth year:
							<span className="spanDetail rounded">{store.details.birth_year}</span>{" "}
						</li>
						<li className="liClass">
							Gender:
							<span className="spanDetail rounded">{store.details.gender}</span>{" "}
						</li>
					</ul>
				</div>
				<Link to="/people/" className="d-flex justify-content-center mb-3">
					<button className="btn btn-outline-warning btn-lg">GO BACK</button>
				</Link>
			</div>
		</content>
	);
};
