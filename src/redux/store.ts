import { combineReducers, createStore, applyMiddleware } from "redux";
import {filteredDataReducer} from "./filtered-data-reducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    filteredDataReducer
})

export type AppRootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
