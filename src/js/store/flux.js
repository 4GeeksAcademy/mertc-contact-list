const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				// getActions().changeColor(0, "green");
			},
			getContactData: (slug) => {
				let url= `https://playground.4geeks.com/contact/agendas/${slug}/contacts`;
				fetch(url)
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					return response.json();  
				})
				.then(data => {
					console.log('Here is your data:', data);
				})
				.catch(error => {
					console.error('Error:', error);
				});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			deleteContact: (id)=>{
				fetch("https://playground.4geeks.com/contact/agendas/mertc/contacts/" + `${id}`, {method:`DELETE`})
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					} 
					else
					console.log(`deletion`,response);
				})
				.catch(error => {
					console.error('Error:', error);
				});
			}
			
		}
	};
};

export default getState;
