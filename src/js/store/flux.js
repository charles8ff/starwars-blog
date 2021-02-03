const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starShipsList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			getStarShips: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json(); // Read the response as json.
					})
					.then(responseAsJson => {
						// Do stuff with the JSON
						console.log("starships", responseAsJson);
						getActions().setStarShips(responseAsJson.results);
					})
					.catch(error => {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			setStarShips: starShipsfromAPI => {
				setStore({ starShipsList: starShipsfromAPI });
			}
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
