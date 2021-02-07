const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShipsList: [],
			urlStored: "https://www.swapi.tech/api/starships",
			characters: [],
			urlPeople: "https://www.swapi.tech/api/people",
			planets: [],
			urlPlanets: "https://www.swapi.tech/api/planets",
			planetsDetails: [],
			numberOfPost: 10 // es el numero de post que se mostraran antes de paginar
		},
		actions: {
			getPeople: requestURL => {
				fetch(requestURL)
					.then(async res => {
						const response = await res.json();
						setStore({ characters: [...getStore().characters, ...response.results] });
						if (response.next) {
							getActions().getPeople(response.next);
						}
					})
					.catch(err => {
						throw err;
					});
			},
			getPlanets: requestURL => {
				fetch(requestURL)
					.then(async res => {
						const response = await res.json();
						setStore({ planets: [...getStore().planets, ...response.results] });
						setStore({ totalPage: Math.ceil(response.results.length / 5) });
						//console.log(Math.ceil(getStore().planets.length / getStore().numberOfPost));
						if (response.next) {
							getActions().getPlanets(response.next);
						}
					})
					.catch(err => {
						throw err;
					});
			},
			getStarShips: requestURL => {
				fetch(requestURL)
					.then(async res => {
						const response = await res.json();
						setStore({ starShipsList: [...getStore().starShipsList, ...response.results] });
						if (response.next) {
							getActions().getStarShips(response.next);
						}
					})
					.catch(err => {
						throw err;
					});
			},
			getPlanetsDetails: urlplanet => {
				console.log("action", urlplanet);
				fetch(urlplanet)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(responseAsJson => {
						console.log(responseAsJson.result.properties);
						let details = Object.keys(responseAsJson.result.properties);
						setStore({ planetsDetails: details });
					});
			}
		}
	};
};

export default getState;
