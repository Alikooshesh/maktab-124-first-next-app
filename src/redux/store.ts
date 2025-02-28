import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducers/counterReducer'
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const combinedReducers = combineReducers({
    counter : counterReducer
})

const persistedReducers = persistReducer({
    key : "maktab-124-next",
    storage,
    whitelist : ["counter"]
} , combinedReducers)

const store = configureStore({
    reducer : persistedReducers,
    middleware : (getDefault)=>getDefault({
        serializableCheck : false
    })
})

export const persistor = persistStore(store)

export default store