import React, { useState, useEffect, useContext, Fragment } from "react";
import { Cards } from "../component/cardpeople.jsx";
import { Container, Row, Col } from "react-bootstrap";

import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

const imgURL = "https://www.wallpapertip.com/wmimgs/41-419911_darth-vader-wallpaper-4k.jpg";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.characters);
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
								/>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};
