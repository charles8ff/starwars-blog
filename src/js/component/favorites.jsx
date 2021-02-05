import React, { useContext, useEffect, Fragment } from "react";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Favorites = props => {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			favoritesInHTML();
		},
		[store.favorites]
	);

	const favoritesInHTML = () => {
		return store.favorites.map((item, index) => {
			return (
				<Dropdown.ItemText key={index.toString()}>
					{item}{" "}
					<Button onClick={() => actions.clickDeleteFavorite(item)}>
						<i className="fas fa-minus-circle" />
					</Button>
				</Dropdown.ItemText>
			);
		});
	};
	return (
		<>
			<DropdownButton id="dropdown-item-button" title="Dropdown button">
				{favoritesInHTML()}
			</DropdownButton>
		</>
	);
};

Favorites.propTypes = {
	click: PropTypes.func
};
