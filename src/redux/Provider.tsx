'use client'

import { Provider as ReduxProvider } from "react-redux";
import store, { persistor } from "./store";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

interface Iprops{
    children : ReactNode
}

const Provider = ({children} : Iprops)=>{
    return(
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
              {()=>(
                <>
                    {children}
                </>
              )}
            </PersistGate>
            
        </ReduxProvider>
    )
}

export default Provider