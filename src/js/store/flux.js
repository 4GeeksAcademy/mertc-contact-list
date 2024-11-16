const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				// getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			deleteContact: (slug)=>{
				fetch("https://playground.4geeks.com/contact/agendas/" + `${slug}`, {method:`DELETE`})
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					return response.json();  
				})
				.then(data => {
					console.log('Deleted successfully:', data);
				})
				.catch(error => {
					console.error('Error:', error);
				});
			}
			
		}
	};
};

export default getState;
