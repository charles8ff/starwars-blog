import React, { useState, useEffect, useContext, Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

import { Singlecard } from "../component/singlecard.jsx";

import "../../styles/home.scss";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const planetName = useParams();
	const history = useHistory();
	const [urlTest, setUrlTest] = useState("");

	let newPlanet = store.planets.find(item => {
		if (item.name == planetName.id.replace("_", " ")) {
			return item;
		}
	});

	const prueba = url => {
		setUrlTest(store.url);
		return urlTest;
	};

	useEffect(() => {
		prueba(store.url);

		actions.getPlanetsDetails(urlTest);
	}, []);

	// useEffect(
	// 	() => {
	// 		history.push("/planets/" + planetName);
	// 	},
	// 	[newPlanet.url]
	// );

	return <Singlecard />;
};
