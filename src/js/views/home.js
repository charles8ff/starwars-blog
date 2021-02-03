import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import CardDeck from "react-bootstrap/Card";
import CardStarShips from "../component/cardstarships.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);

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
		<div className="container text-center mt-5">
			<div className="row d-flex flex-row justify-content-between">{starShipsInHTML}</div>
			{console.log(store.starShipsList)}
		</div>
	);
};
