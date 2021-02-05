/* eslint-disable no-use-before-define */
import React, { useContext, useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Context } from "../store/appContext";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter, Link } from "react-router-dom";

export default function Grouped() {
	const { store, actions } = useContext(Context);
	const [inputValue, setInputValue] = useState("");
	const [value, setValue] = useState();

	let options = [...store.characters, ...store.planets, ...store.starShipsList];
	console.log(options);

	options = options.map(elem => {
		let setType = "";
		if (elem.url.includes("people")) setType = "Characters";
		if (elem.url.includes("planet")) setType = "Planets";
		if (elem.url.includes("starship")) setType = "Starships";
		return {
			type: setType,
			...elem
		};
	});

	return (
		<>
			<Autocomplete
				id="grouped-demo"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				options={options.sort((a, b) => -b.type.localeCompare(a.type))}
				groupBy={option => option.type}
				getOptionLabel={option => option.name}
				style={{ width: 300 }}
				renderInput={params => <TextField {...params} id="text-field" label="Search!" variant="outlined" />}
			/>
			<IconButton type="submit" aria-label="search">
				<SearchIcon />
			</IconButton>
		</>
	);
}
