import { createContext, useReducer } from 'react';
import { cartReducer, intialstate } from '../Redux/CartReducer';


export const FormContext = createContext();
const WrapperContext = ({children}) => {
     const [state, dispatch] = useReducer(cartReducer, intialstate);
  return (
   <FormContext.Provider value={{ state,  dispatch }}>
      {children}
    </FormContext.Provider>
  )
}

export default WrapperContext
