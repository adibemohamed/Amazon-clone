import React, { createContext, useContext, useRecuder } from 'react';

// Prepare the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useRecuder(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// Pull intormation from the data layer
export const useStateValue = () => useContext(StateContext);