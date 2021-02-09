import React, { useContext, useEffect } from "react";
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
					<Button onClick={() => actions.clickDeleteFavorite(item)} variant="outline-warning">
						<i className="fas fa-3x fa-minus-circle " />
					</Button>
				</Dropdown.ItemText>
			);
		});
	};
	return (
		<DropdownButton
			id="dropdown-item-button"
			title={<i className="fas fa-heart" />}
			variant="outline-warning"
			className="ml-2"
			menuAlign="right">
			{favoritesInHTML()}
		</DropdownButton>
	);
};

Favorites.propTypes = {
	click: PropTypes.func
};
