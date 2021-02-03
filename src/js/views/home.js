import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Container, Row, Col } from "react-bootstrap";
import CardDeck from "react-bootstrap/Card";

import { Cardplanets } from "../component/card.jsx";
import { Cards } from "../component/cardpeople.jsx";
import CardStarShips from "../component/cardstarships.jsx";

const imgURL = "https://www.wallpapertip.com/wmimgs/41-419911_darth-vader-wallpaper-4k.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const urlImg =
		"https://images.unsplash.com/photo-1545156521-77bd85671d30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
	let listPlanets = store.planets.map((item, index) => {
		return <Cardplanets name={item.name} src={urlImg} key={index} />;
	});
	let starShipsInHTML = store.starShipsList.map((elem, index) => {
		return (
			<CardStarShips
				key={index}
				name={elem.name}
				imgDefault="https://i.pinimg.com/originals/f4/4d/7f/f44d7f40b15cef45e9d6fe14cad7fb79.jpg"
			/>
		);
	});

	return (
		<>
			<Container>
				<Row>
					{store.characters.map((item, index) => {
						return (
							<Col sm key={index}>
								<Cards
									name={item.name}
									img={imgURL}
									eyeColor={item.eye_color}
									gender={item.gender}
									birthyear={item.birth_year}
									url={item.url.replace("https://www.swapi.tech/api/", "")}
								/>
							</Col>
						);
					})}
				</Row>
				<div className="row d-flex flex-row justify-content-between">{listPlanets}</div>
				<div className="row d-flex flex-row justify-content-between">{starShipsInHTML}</div>
			</Container>
		</>
	);
};
