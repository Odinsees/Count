import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    counter:counterReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

let preloadedState;
const persistedCounterString = localStorage.getItem("appState")
if (persistedCounterString){
    preloadedState = JSON.parse(persistedCounterString)
}

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))

store.subscribe(()=>{
    localStorage.setItem("appState", JSON.stringify(store.getState()))
})


// @ts-ignore
window.store = store