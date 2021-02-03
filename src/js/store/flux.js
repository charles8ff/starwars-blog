const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			url: "https://www.swapi.tech/api/people"
		},
		actions: {
			setURL: next => {
				setStore({ url: next });
			},
			setCharacters: charactersList => {
				setStore({ characters: [...getStore().characters, ...charactersList] });
			},
			connectApi: () => {
				fetch(getStore().url)
					.then(async res => {
						const response = await res.json();
						getActions().setCharacters(response.results);
						getActions().setURL(response.next);
					})
					.catch(err => {
						throw err;
					});
			}
		}
	};
};

export default getState;
