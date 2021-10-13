import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter:counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store