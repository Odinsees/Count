
type InitialStateType = typeof initialState

type ActionType =
    |ReturnType<typeof setStartValueAC>
    |ReturnType<typeof setMaxValueAC>
    |ReturnType<typeof resetCountAC>
    |ReturnType<typeof incrementCountAC>
    |ReturnType<typeof setCountAC>
    |ReturnType<typeof setGreetingAC>

let initialState = {
    startValue:0,
    maxValue:0,
    value:0,
    greeting:true
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
                value: state.startValue
            }
        }
        case "INCREMENT-COUNT":{
            return {
                ...state,
                value: state.value + 1
            }
        }
        case "SET-GREETING":{
            return {
                ...state,
                greeting: action.newValue
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
export const resetCountAC = () =>{
    return{type: "RESET-COUNT"} as const
}
export const incrementCountAC = () =>{
    return {type: "INCREMENT-COUNT"} as const
}

export const setGreetingAC = (newValue:boolean) =>{
    return{type: "SET-GREETING", newValue} as const
}

