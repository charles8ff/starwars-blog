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
	const { store, actions } = useContext(Context);
	const [page, setPage] = useState(1); // Page start
	const [totalPages, setTotalPages] = useState(0);

	useEffect(
		() => {
			setTotalPages(Math.ceil(store.planets.length / store.numberOfPost));
		},
		[store.planets]
	);

	const startIndex = (page - 1) * store.numberOfPost;
	const selectedPlanets = store.planets.slice(startIndex, startIndex + store.numberOfPost);

	let listPlanets = selectedPlanets.map((item, index) => {
		return (
			<Col sm key={index} className="mb-5">
				<CardTemplate
					name={item.name}
					src={
						"https://images.unsplash.com/photo-1545156521-77bd85671d30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
					}
					category={"/planets/"}
					index={index}
					url={item.url}
					key={index.toString()}
					description={"Oh que planeta tan chulo"}
				/>
			</Col>
		);
	});

	const handleClick = num => {
		setPage(num);
	};
	return (
		<>
			<Container className="mt-5">
				<Row>{listPlanets}</Row>
			</Container>
			<Container>
				<Row className="d-flex justify-content-center mb-5">
					{" "}
					<Pagination totalPages={totalPages} handleClick={handleClick} />
				</Row>
			</Container>
		</>
	);
};
