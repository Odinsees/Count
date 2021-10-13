
type InitialStateType = typeof initialState

type ActionType =
    |ReturnType<typeof setStartValueAC>
    |ReturnType<typeof setMaxValueAC>

let initialState = {
    startValue:0,
    maxValue:0
}

export const startMaxValueReducer = (state:InitialStateType = initialState, action:ActionType):InitialStateType =>{
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
        default: return state
    }
}


export const setStartValueAC = (newStartValue:number) =>{
    return{
        type: "SET-START-VALUE", newStartValue
    } as const
}

export const setMaxValueAC = (newMaxValue:number) =>{
    return{
        type: "SET-MAX-VALUE", newMaxValue
    } as const
}