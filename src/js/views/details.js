import React, { useState, useEffect, useContext, Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

import { Singlecard } from "../component/singlecard.jsx";
import { Cardplanets } from "../component/card.jsx";

import "../../styles/home.scss";
import { Container } from "react-bootstrap";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const planetName = useParams();

	let url = {};

	let newPlanet = store.planets.find(item => {
		if (item.name == planetName.id.replace("_", " ")) return (url = item);
	});

	const getUrl = () => {
		let getUrl = Object.values(url);
		return getUrl[2];
	};

	useEffect(
		() => {
			actions.getPlanetsDetails(getUrl());
		},
		[getUrl() != undefined]
	);

	return <Container>hola</Container>;
};
