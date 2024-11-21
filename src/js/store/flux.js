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
				console.log("getContactData working");
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
			editContact: (id, updatedData) => {
				
				let url= `https://playground.4geeks.com/contact/agendas/mertc/contacts/${id}`;
				fetch(url, {
					method: 'PUT', // HTTP method for updating resources
					headers: {
						'Content-Type': 'application/json', // Specify JSON format
					},
					body: JSON.stringify(updatedData) // Convert data to JSON string
				})
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
				console.log(getStore());
				const updatedContacts = getStore().contacts.filter(contact => contact.id !== id);
    			setStore({ contacts: updatedContacts }); // Replace contacts array in store

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
			},
			addContact: (data)=>{
				
				fetch("https://playground.4geeks.com/contact/agendas/mertc/contacts/",  {
						method: 'POST', // Specify the HTTP method
						headers: {
						'Content-Type': 'application/json' // Inform the server that data is JSON
						},
						body: JSON.stringify(data) // Convert data object to JSON
					})
				.then(response => {
					if (!response.ok) {

						throw new Error(`HTTP error! Status: ${response}`);
					} 
					else{
						console.log(`response to post: `,response);
						getActions().getContactData("mertc");
					}
				})
				.catch(error => {
					console.error('Error:', error);
				});
				
				 
				 
			},
			setStore: (data) =>{setStore(data)}
		}
	};
};

export default getState;
