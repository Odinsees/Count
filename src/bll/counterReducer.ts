import {Dispatch} from "redux";

type InitialStateType = typeof initialState

type ActionType =
    |ReturnType<typeof setStartValueAC>
    |ReturnType<typeof setMaxValueAC>
    |ReturnType<typeof resetCountAC>
    |ReturnType<typeof incrementCountAC>
    |ReturnType<typeof setCountAC>

let initialState = {
    startValue:0,
    maxValue:0,
    value:0
}

export const counterReducer = (state:InitialStateType = initialState, action:ActionType):InitialStateType =>{
    switch (action.type){
        case "SET-MAX-VALUE":{
            return {
                ...state,
                maxValue: action.newMaxValue
            }
        }
        case "SET-START-VALUE":{
            return {
                ...state,
                startValue: action.newStartValue
            }
        }
        case "SET-COUNT-VALUE":{
            return {
                ...state,
                value: action.newCountValue
            }
        }
        case "RESET-COUNT":{
            return {
                ...state,
                value: action.startValue
            }
        }
        case "INCREMENT-COUNT":{
            return {
                ...state,
                value: state.value + 1
            }
        }
        default: return state
    }
}


export const setStartValueAC = (newStartValue:number) =>{
    return{type: "SET-START-VALUE", newStartValue} as const
}
export const setMaxValueAC = (newMaxValue:number) =>{
    return{type: "SET-MAX-VALUE", newMaxValue} as const
}
export const setCountAC = (newCountValue:number) =>{
    return{type: "SET-COUNT-VALUE", newCountValue} as const
}
export const resetCountAC = (startValue:number) =>{
    return{type: "RESET-COUNT", startValue} as const
}
export const incrementCountAC = () =>{
    return {type: "INCREMENT-COUNT"} as const
}

//thunk

/*export const incCountTC = (count:number)=> (dispatch:Dispatch)=>{
    localStorage.setItem("counterValue", JSON.stringify(count))
    dispatch(incrementCountAC())
}*/

export const setCountValueInLocalStorageTC = (count:number)=> (dispatch:Dispatch)=>{
    localStorage.setItem("counterValue", JSON.stringify(count + 1))
    dispatch(incrementCountAC())
}

export const setMaxAndStartValueInLocalStorageTC = (startValue:number, maxValue:number, count:number)=> (dispatch:Dispatch)=>{
    localStorage.setItem("startValue", JSON.stringify(startValue))
    localStorage.setItem("maxValue", JSON.stringify(maxValue))
    localStorage.setItem("counterValue", JSON.stringify(count + 1))
    dispatch(resetCountAC(startValue))
}

export const getMaxAndStartValueInLocalStorageTC = ()=> (dispatch:Dispatch)=>{
    let startValue = localStorage.getItem("startValue")
    let maxValue = localStorage.getItem("maxValue")
    let count = localStorage.getItem("counterValue")
    if (startValue && maxValue && count) {
        dispatch(setStartValueAC(JSON.parse(startValue)))
        dispatch(setMaxValueAC(JSON.parse(maxValue)))
        dispatch(setCountAC(JSON.parse(count)))
    }
}