import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";

import { Context } from "../store/appContext";
import { Cardplanets } from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("estoy en la home", store.planets);
	const urlImg =
		"https://images.unsplash.com/photo-1545156521-77bd85671d30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

	let listPlanets = store.planets.map((item, index) => {
		return <Cardplanets name={item.name} src={urlImg} key={index} />;
	});
	console.log("adios", listPlanets);

	return (
		<content className="container">
			<div className="row d-flex flex-row justify-content-between">{listPlanets}</div>
		</content>
	);
};
