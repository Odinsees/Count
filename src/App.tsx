import React, {useState} from 'react';
import s from "./App.module.css"
import {NumberWindow} from "./Components/NumberWindow/NumberWindow";
import {ValueWindow} from "./Components/ValueWindow/ValueWindow";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {
    incrementCountAC, resetCountAC, setGreetingAC,
    setMaxValueAC,
    setStartValueAC
} from "./bll/counterReducer";

const App = () => {

    let dispatch = useDispatch()

    let startValue = useSelector<AppRootStateType,number>(state => state.counter.startValue)
    let maxValue = useSelector<AppRootStateType,number>(state => state.counter.maxValue)
    const count = useSelector<AppRootStateType,number>(state => state.counter.value)
    let greeting = useSelector<AppRootStateType,boolean>(state => state.counter.greeting)

    let [errorStart, setErrorStart] = useState(false)
    let [errorMax, setErrorMax] = useState(false)
    let [warning, setWarning] = useState(false)
    let [disabledSetButton, setDisabledSetButton] = useState(true)

    const countUp = () => count <= maxValue && dispatch(incrementCountAC())
    const countReset = () => dispatch(resetCountAC())

    const setItemInLocalStorage = () => {
        dispatch(setStartValueAC(startValue))
        dispatch(setMaxValueAC(maxValue))
        dispatch(resetCountAC())
        setWarning(false)
        setDisabledSetButton(true)
    }

    const setStartValueHandler = (newValueStart:number) => {
        if (newValueStart >= 0 && newValueStart < maxValue
            && newValueStart !== maxValue && maxValue >= 0) {
            setWarning(true)
            setErrorStart(false)
            setErrorMax(false)
            dispatch(setGreetingAC(false))
        } else {
            setErrorStart(true)
        }
        dispatch(setStartValueAC(newValueStart))
        setDisabledSetButton(false)
    }

    const setMaxValueHandler = (newValueMax:number) => {
        if (newValueMax >= 0 && newValueMax > startValue
            && newValueMax !== startValue && startValue >= 0) {
            setWarning(true)
            setErrorMax(false)
            setErrorStart(false)
            dispatch(setGreetingAC(false))
        } else {
            setErrorMax(true)
        }
        dispatch(setMaxValueAC(newValueMax))
        setDisabledSetButton(false)
    }
    return (
        <div className={s.Content}>
            <ValueWindow
                SetMaxValueCallBack={setMaxValueHandler}
                SetStartValueCallBack={setStartValueHandler}
                setItemInLocalStageCallBack={setItemInLocalStorage}
                maxValue={maxValue}
                startValue={startValue}
                errorStart={errorStart}
                errorMax={errorMax}
                setButtonDisable={disabledSetButton}
            />
            <NumberWindow
                maxValue={maxValue}
                startValue={startValue}
                count={count}
                countUpHandlerCallBack={countUp}
                countResetCallBack={countReset}
                error={errorStart || errorMax}
                warning={warning}
                greeting={greeting}
            />
        </div>
    )
}

export default App;

