const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShipsList: [],
			urlStored: "https://www.swapi.tech/api/starships",
			characters: [],
			urlPeople: "https://www.swapi.tech/api/people",
			planets: [],
			urlPlanets: "https://www.swapi.tech/api/planets",
			details: []
		},
		actions: {
			setUrlStored: urlFromAPI => {
				setStore({ urlStored: urlFromAPI });
			},
			setStarShipsList: starShipsfromAPI => {
				starShipsfromAPI.map(elem => {
					setStore({ starShipsList: [...getStore().starShipsList, elem] });
				});
			},
			setURLPeople: next => {
				setStore({ urlPeople: next });
			},
			setCharacters: charactersList => {
				setStore({ characters: [...getStore().characters, ...charactersList] });
			},
			setUrlPlanets: nextUrl => {
				setStore({ urlPlanets: nextUrl });
			},
			setPlanets: newPlanets => {
				newPlanets.map(item => {
					setStore({ planets: [...getStore().planets, item] });
				});
			},
			getPeople: () => {
				fetch(getStore().urlPeople)
					.then(async res => {
						const response = await res.json();
						getActions().setCharacters(response.results);
						getActions().setURLPeople(response.next);
					})
					.catch(err => {
						throw err;
					});
			},
			getPlanets: () => {
				fetch(getStore().urlPlanets)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(responseAsJson => {
						//	console.log(responseAsJson);
						getActions().setUrlPlanets(responseAsJson.next);
						getActions().setPlanets(responseAsJson.results);
					});
			},
			getStarShips: () => {
				fetch(getStore().urlStored)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(responseAsJson => {
						getActions().setUrlStored(responseAsJson.next);
						getActions().setStarShipsList(responseAsJson.results);
					});
			},
			getDetails: urlDetail => {
				console.log("action", urlDetail);
				fetch(urlDetail)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(responseAsJson => {
						setStore({ details: responseAsJson.result.properties });
					});
			}
		}
	};
};

export default getState;
