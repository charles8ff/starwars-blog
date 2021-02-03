const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			urlPeople: "https://www.swapi.tech/api/people",
			urlPlanets: "https://www.swapi.tech/api/planets",
			planets: []
		},
		actions: {
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
						getActions().setUrlPlanets(responseAsJson.next);
						getActions().setPlanets(responseAsJson.results);
					});
			}
		}
	};
};

export default getState;
