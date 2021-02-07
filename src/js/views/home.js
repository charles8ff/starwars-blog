import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from "react-bootstrap";
import CardDeck from "react-bootstrap/Card";

import { CardTemplate } from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	let listPlanets = store.planets.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				category={"/planets/"}
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
				category={"/starships/"}
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
				category={"/people/"}
				src={"https://www.wallpapertip.com/wmimgs/41-419911_darth-vader-wallpaper-4k.jpg"}
				index={index}
				url={item.url}
				key={index.toString()}
			/>
		);
	});

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};
	return (
		<>
			<div className="d-flex flex-row header container-fluid mb-5">hola</div>
			<Container>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listPeople}
				</Carousel>
			</Container>
			<div className="d-flex flex-row header container-fluid mb-5">hola</div>
			<Container>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listPlanets}
				</Carousel>
			</Container>
			<div className="d-flex flex-row header container-fluid mb-5">hola</div>
			<Container>
				<Carousel className="d-flex flex-row ml-auto" responsive={responsive}>
					{listStartShips}
				</Carousel>
			</Container>
		</>
	);
};
