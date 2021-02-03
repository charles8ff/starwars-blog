const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: "https://www.swapi.tech/api/planets",
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			setUrl: nextUrl => {
				setStore({ url: nextUrl });
			},
			setPlanets: newPlanets => {
				newPlanets.map(item => {
					setStore({ planets: [...getStore().planets, item] });
				});
			},
			getPlanets: () => {
				fetch(getStore().url)
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(responseAsJson => {
						getActions().setUrl(responseAsJson.next);
						getActions().setPlanets(responseAsJson.results);
					});
			}
		}
	};
};

export default getState;
