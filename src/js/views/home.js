import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Container, Row, Col } from "react-bootstrap";
import CardDeck from "react-bootstrap/Card";

import { CardTemplate } from "../component/card.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);

	let listPlanets = store.planets.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				src={
					"https://images.unsplash.com/photo-1545156521-77bd85671d30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
				}
				index={index}
				url={item.url}
				key={index.toString()}
			/>
		);
	});

	let listStartShips = store.starShipsList.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				src={"https://i.pinimg.com/originals/f4/4d/7f/f44d7f40b15cef45e9d6fe14cad7fb79.jpg"}
				index={index}
				url={item.url}
				key={index.toString()}
			/>
		);
	});

	let listPeople = store.characters.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				src={"https://www.wallpapertip.com/wmimgs/41-419911_darth-vader-wallpaper-4k.jpg"}
				index={index}
				url={item.url}
				key={index.toString()}
			/>
		);
	});
	return (
		<>
			<div className="row d-flex flex-row justify-content-between">{listPlanets}</div>
			<div className="row d-flex flex-row justify-content-between">{listStartShips}</div>
			<div className="row d-flex flex-row justify-content-between">{listPeople}</div>
		</>
	);
};
