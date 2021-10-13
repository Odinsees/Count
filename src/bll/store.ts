import {combineReducers, createStore} from "redux";
import {startMaxValueReducer} from "./StartMaxValueReducer";

const rootReducer = combineReducers({
    counter:startMaxValueReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)