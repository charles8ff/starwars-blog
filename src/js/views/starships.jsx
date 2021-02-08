import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../component/pagination.jsx";

import { CardTemplate } from "../component/card.jsx";

export const StarShips = () => {
	// 0 - 59 items
	const { store, actions } = useContext(Context);
	const [page, setPage] = useState(1); //Donde comienza la paginacion
	const [totalPages, setTotalPages] = useState(0);

	useEffect(
		() => {
			setTotalPages(Math.ceil(store.starShipsList.length / store.numberOfPost));
		},
		[store.starShipsList]
	);

	const startIndex = (page - 1) * store.numberOfPost;
	const selectedStarShips = store.starShipsList.slice(startIndex, startIndex + store.numberOfPost);

	let listPeople = selectedStarShips.map((item, index) => {
		return (
			<Col sm key={index} className="mb-5">
				<CardTemplate
					name={item.name}
					src={"https://i.pinimg.com/originals/f4/4d/7f/f44d7f40b15cef45e9d6fe14cad7fb79.jpg"}
					category={"/starships/"}
					index={index}
					url={item.url}
					key={index.toString()}
					description={"Que mareo me da esta nave"}
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
				<Row>{listPeople}</Row>
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
