import React, { createContext, useReducer } from 'react';

const initialState = {
  members: [],
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'getMembers':
        return { ...state, members: action.payload }
      
      case 'pushMember':
        return { ...state, members: [...state.members, action.payload ]  }

      default:
        return state
    }
  }, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}