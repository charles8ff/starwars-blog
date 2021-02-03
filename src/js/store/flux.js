const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			setPlanets: listPlanets => {
				console.log(listPlanets);
				setStore({ planets: listPlanets });
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(responseAsJson => {
						getActions().setPlanets(responseAsJson.results);
						console.log(responseAsJson);
					});
			}
		}
	};
};

export default getState;
