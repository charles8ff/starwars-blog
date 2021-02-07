const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShipsList: [],
			urlStored: "https://www.swapi.tech/api/starships",
			characters: [],
			urlPeople: "https://www.swapi.tech/api/people",
			planets: [],
			urlPlanets: "https://www.swapi.tech/api/planets",
			details: [],
			favorites: [],
			nameDeleteFav: "",
			numberOfPost: 12 // es el numero de post que se mostraran antes de paginar
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
			clickDeleteFavorite: targetIndex => {
				setStore({ favorites: getStore().favorites.filter(index => index !== targetIndex) });
			},

			captureItem: name => {
				let found = getStore().favorites.find(item => item == name);
				if (!found) setStore({ favorites: [...getStore().favorites, name] });
			},
			getDetails: urlDetail => {
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
