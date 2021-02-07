import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../component/pagination.jsx";

import { CardTemplate } from "../component/card.jsx";

export const Planets = () => {
	// 0 - 59 items
	const { store, actions } = useContext(Context);
	const [page, setPage] = useState(1); //Donde comienza la paginacion
	const [totalPages, setTotalPages] = useState(0);

	useEffect(
		() => {
			setTotalPages(Math.ceil(store.planets.length / store.numberOfPost));
		},
		[store.planets]
	);

	const startIndex = (page - 1) * store.numberOfPost;
	const selectedPlantes = store.planets.slice(startIndex, startIndex + store.numberOfPost);

	let listPlanets = selectedPlantes.map((item, index) => {
		return (
			<CardTemplate
				name={item.name}
				src={
					"https://images.unsplash.com/photo-1545156521-77bd85671d30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
				}
				category={"/planets/"}
				index={index}
				url={item.url}
				key={index.toString()}
			/>
		);
	});

	const handleClick = num => {
		setPage(num);
	};
	return (
		<>
			<Pagination totalPages={totalPages} handleClick={handleClick} />
			<div>{listPlanets}</div>
		</>
	);
};
