const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShipsList: [],
			urlStored: "https://www.swapi.tech/api/starships",
			characters: [],
			urlPeople: "https://www.swapi.tech/api/people",
			urlPlanets: "https://www.swapi.tech/api/planets",
			planets: [],
			favorites: [],
			nameDeleteFav: ""
		},
		actions: {
			getStarShips: () => {
				fetch(getStore().urlStored)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json(); // Read the response as json.
					})
					.then(responseAsJson => {
						getActions().setUrlStored(responseAsJson.next);
						getActions().setStarShipsList(responseAsJson.results); //SPREAD
					});
			},

			clickDeleteFavorite: targetIndex => {
				setStore({ favorites: getStore().favorites.filter(index => index !== targetIndex) });
			},

			capturePlanet: name => {
				let found = getStore().favorites.find(item => item == name);
				if (!found) setStore({ favorites: [...getStore().favorites, name] });
			},

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
						//console.log(responseAsJson);
						getActions().setUrlPlanets(responseAsJson.next);
						getActions().setPlanets(responseAsJson.results);
					});
			}
		}
	};
};

export default getState;
