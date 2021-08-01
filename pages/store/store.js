import { createContext, useReducer} from 'react';

const initialState = {flag: false};

function Reducer(state,action){
  
    return {...state, data: action.payload, flag: true}

}

export default function Store({ children }) {
  const [state, dispatch] = useReducer(Reducer,initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(initialState);