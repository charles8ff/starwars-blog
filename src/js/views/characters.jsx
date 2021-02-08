import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from "react-bootstrap";
import Pagination from "../component/pagination.jsx";

import { CardTemplate } from "../component/card.jsx";

export const Characters = () => {
	// 0 - 59 items
	const { store, actions } = useContext(Context);
	const [page, setPage] = useState(1); //Donde comienza la paginacion
	const [totalPages, setTotalPages] = useState(0);

	useEffect(
		() => {
			setTotalPages(Math.ceil(store.characters.length / store.numberOfPost));
		},
		[store.characters]
	);

	const startIndex = (page - 1) * store.numberOfPost;
	const selectedPeople = store.characters.slice(startIndex, startIndex + store.numberOfPost);

	let listPeople = selectedPeople.map((item, index) => {
		return (
			<Col sm key={index} className="mb-5">
				<CardTemplate
					name={item.name}
					src={"https://www.wallpapertip.com/wmimgs/41-419911_darth-vader-wallpaper-4k.jpg"}
					category={"/people/"}
					index={index}
					url={item.url}
					key={index.toString()}
					description={"Que la fuerza te acompañe"}
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
