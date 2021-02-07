/* eslint-disable no-use-before-define */
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	inputRoot: {
		color: "orange",
		fontFamily: "Roboto Mono",
		backgroundColor: "transparent",
		"& .MuiOutlinedInput-notchedOutline": {
			borderWidth: "2px",
			borderColor: "orange"
		},
		"&:hover .MuiOutlinedInput-notchedOutline": {
			borderWidth: "2px",
			borderColor: "orange"
		},
		"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderWidth: "2px",
			borderColor: "orange"
		}
	}
}));

const textStyles = makeStyles({
	inputLabel: {
		color: "white",
		"&.focused": {
			color: "white"
		}
	}
});

export default function Grouped() {
	const { store, actions } = useContext(Context);
	const classes = useStyles();
	const textClasses = textStyles();

	let options = [...store.characters, ...store.planets, ...store.starShipsList];

	options = options.map(elem => {
		let setType = "";
		if (elem.url.includes("people")) setType = "people";
		if (elem.url.includes("planet")) setType = "planets";
		if (elem.url.includes("starship")) setType = "starships";
		return {
			type: setType,
			...elem
		};
	});

	return (
		<>
			<Link>
				<Autocomplete
					id="grouped-demo"
					classes={classes}
					options={options.sort((a, b) => -b.type.localeCompare(a.type))}
					groupBy={option => option.type.charAt(0).toUpperCase() + option.type.slice(1)}
					getOptionLabel={option => option.name}
					style={{ width: 300 }}
					renderOption={option => (
						<React.Fragment>
							<span
								style={{ cursor: "pointer" }}
								onClick={() => {
									window.location.href = option.type + "/" + option.name.replace(" ", "_");
								}}>
								{option.name}
							</span>
						</React.Fragment>
					)}
					renderInput={params => (
						<TextField
							{...params}
							InputLabelProps={{
								classes: {
									root: textClasses.inputLabel,
									focused: "focused"
								}
							}}
							InputProps={{
								...params.InputProps,
								endAdornment: (
									<InputAdornment position="end">
										<SearchIcon />
									</InputAdornment>
								)
							}}
							id="text-field"
							label="Search!"
							variant="outlined"
						/>
					)}
				/>
			</Link>
		</>
	);
}
