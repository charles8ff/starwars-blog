import React, { useState, useEffect, useContext, Fragment } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

import { Singlecard } from "../component/singlecard.jsx";
import { Cardplanets } from "../component/card.jsx";

import "../../styles/home.scss";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const planetName = useParams();
	const history = useHistory();

	console.log("he", store.planetsDetails);
	console.log("este es mi array", store.planetsDetails);

	// let newPlanet = store.planets.find(item => {
	// 	if (item.name == planetName.id.replace("_", " ")) {
	// 		return item;
	// 	}
	// });

	useEffect(() => {
		actions.getPlanetsDetails(store.url);
	}, []);

	//**CREAR COMPONENTE - REVISAR ARRAY VS OBJECT LOS ITEMS VAN POR INDEX */

	// let detailPlanet = store.planetsDetails.map((item, index) => {
	// 	return (
	// 		<>
	// 			<Cardplanets name={item.name} index={index} url={item.url} />
	// 		</>
	// 	);
	// });

	return <div>{detailPlanet}</div>;
};
