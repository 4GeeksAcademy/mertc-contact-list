import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			
			console.log("appContext useeffects just ran");
			let url = "https://playground.4geeks.com/contact/agendas/mertc"; 
			fetch(url,  {
				method: 'POST', // Specify the HTTP method
				headers: {
				'Content-Type': 'application/json' // Inform the server that data is JSON
				} 
			})

			fetch(url)
			.then(response => {
				if (!response.ok) {
				  throw new Error("Network response was not ok " + response.statusText);
				}
				return response.json();
			  })
			  .then(data => {
				setState({
					store: Object.assign(state.store, data),
					actions: { ...state.actions }
				}) ;
				console.log("Data retrieved:", state.store); // handle the JSON data
				
			  })
			  .catch(error => {
				console.error("Fetch error:", error); // handle any errors
			  });
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
