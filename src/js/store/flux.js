const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [{ img: "hola" }]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			setCharacters: charactersList => {
				//	console.log(charactersList);
				setStore({ characters: charactersList });
			},
			connectApi: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(responseAsJson => {
						// Do stuff with the JSON
						//	console.log(responseAsJson.results);
						getActions().setCharacters(responseAsJson.results);
					})
					.catch(error => {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
