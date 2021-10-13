import React, {useEffect, useState} from 'react';
import s from "./App.module.css"
import {NumberWindow} from "./Components/NumberWindow/NumberWindow";
import {ValueWindow} from "./Components/ValueWindow/ValueWindow";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {setMaxValueAC, setStartValueAC} from "./bll/StartMaxValueReducer";

const App = () => {

    //let [maxValue, setMaxValue] = useState(0)
    //let [startValue, setStartValue] = useState(0)

    let dispatch = useDispatch()

    let startValue = useSelector<AppRootStateType,number>(state => state.counter.startValue)
    let maxValue = useSelector<AppRootStateType,number>(state => state.counter.maxValue)


    let [errorStart, setErrorStart] = useState(false)
    let [errorMax, setErrorMax] = useState(false)
    let [count, setCount] = useState(0)
    let [warning, setWarning] = useState(false)
    let [disabledSetButton, setDisabledSetButton] = useState(true)

    const countUp = (): boolean | void => count < maxValue && setCount(count => count + 1)
    const countReset = (): void => setCount(startValue)

    const setLocalStorageNumberHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(count))
    }
    const setItemInLocalStorage = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
        setCount(startValue)
        setWarning(false)
        setDisabledSetButton(true)
    }
    const getLocalStorageHandler = () => {
        let startValue = localStorage.getItem("startValue")
        let maxValue = localStorage.getItem("maxValue")
        let count = localStorage.getItem("counterValue")
        if (startValue && maxValue && count) {
            dispatch(setStartValueAC(JSON.parse(startValue)))
            dispatch(setMaxValueAC(JSON.parse(maxValue)))
            setCount(JSON.parse(count))
        }
    }

    const setStartValueHandler = (newValueStart:number) => {
        if (newValueStart >= 0 && newValueStart < maxValue
            && newValueStart !== maxValue && maxValue >= 0) {
            setWarning(true)
            setErrorStart(false)
            setErrorMax(false)
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
        } else {
            setErrorMax(true)
        }
        dispatch(setMaxValueAC(newValueMax))
        setDisabledSetButton(false)
    }
    useEffect(() => {
        getLocalStorageHandler()
    }, [])

    useEffect(() => {
        setLocalStorageNumberHandler()
    }, [count])

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
            />
        </div>
    )
}

export default App;
