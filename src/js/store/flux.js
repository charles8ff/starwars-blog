const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShipsList: [],
			urlStored: "https://www.swapi.tech/api/starships"
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
						// Do stuff with the JSON
						// console.log("next ones", responseAsJson.next);
						getActions().setUrlStored(responseAsJson.next);
						getActions().setStarShipsList(responseAsJson.results); //SPREAD
					});
				// .catch(error => {
				// 	console.log("Looks like there was a problem: \n", error);
				// });
			},

			setUrlStored: urlFromAPI => {
				setStore({ urlStored: urlFromAPI });
			},
			setStarShipsList: starShipsfromAPI => {
				starShipsfromAPI.map(elem => {
					setStore({ starShipsList: [...getStore().starShipsList, elem] });
				});
			}
		}
	};
};

export default getState;
