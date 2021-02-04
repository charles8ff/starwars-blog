const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShipsList: [],
			urlStored: "https://www.swapi.tech/api/starships",
			characters: [],
			urlPeople: "https://www.swapi.tech/api/people",
			planets: [],
			urlPlanets: "https://www.swapi.tech/api/planets",
			url: ""
		},
		actions: {
			// setUrlStored: urlFromAPI => {
			// 	setStore({ urlStored: urlFromAPI });
			// },
			// setStarShipsList: starShipsfromAPI => {
			// 	starShipsfromAPI.map(elem => {
			// 		setStore({ starShipsList: [...getStore().starShipsList, elem] });
			// 	});
			// },
			// setURLPeople: next => {
			// 	setStore({ urlPeople: next });
			// },
			// setCharacters: charactersList => {
			// 	setStore({ characters: [...getStore().characters, ...charactersList] });
			// },
			setUrlPlanets: nextUrl => {
				setStore({ urlPlanets: nextUrl });
			},
			setPlanets: newPlanets => {
				newPlanets.map(item => {
					setStore({ planets: [...getStore().planets, item] });
				});
			},
			setUrl: newUrl => {
				setStore({ url: newUrl });
			},
			// getPeople: () => {
			// 	fetch(getStore().urlPeople)
			// 		.then(async res => {
			// 			const response = await res.json();
			// 			getActions().setCharacters(response.results);
			// 			getActions().setURLPeople(response.next);
			// 		})
			// 		.catch(err => {
			// 			throw err;
			// 		});
			// },
			getPlanets: () => {
				fetch(getStore().urlPlanets)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(responseAsJson => {
						getActions().setUrlPlanets(responseAsJson.next);
						getActions().setPlanets(responseAsJson.results);
					});
			},
			// getStarShips: () => {
			// 	fetch(getStore().urlStored)
			// 		.then(response => {
			// 			if (!response.ok) {
			// 				throw Error(response.statusText);
			// 			}
			// 			return response.json();
			// 		})
			// 		.then(responseAsJson => {
			// 			getActions().setUrlStored(responseAsJson.next);
			// 			getActions().setStarShipsList(responseAsJson.results);
			// 		});
			// },
			getPlanetsDetails: urlplanet => {
				fetch(urlplanet)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(responseAsJson => {
						//console.log(responseAsJson);
						//console.log(responseAsJson.result);
						console.log(responseAsJson.result.properties);
					});
			},
			getUrl: index => {
				const newUrl = [...getStore().planets];
				newUrl[index].url = getStore().planets[index].url;
				getActions().setUrl(newUrl[index].url);
			}
		}
	};
};

export default getState;
