import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./App.module.css"
import {NumberWindow} from "./Components/NumberWindow/NumberWindow";
import {ValueWindow} from "./Components/ValueWindow/ValueWindow";

const App = () => {


    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [errorStart, setErrorStart] = useState(false)
    let [errorMax, setErrorMax] = useState(false)
    let [count, setCount] = useState(0)
    let [warning, setWarning] = useState(false)

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
    }
    const getLocalStorageHandler = () => {
        let startValue = localStorage.getItem("startValue")
        let maxValue = localStorage.getItem("maxValue")
        let count = localStorage.getItem("counterValue")
        if (startValue && maxValue && count) {
            setStartValue(JSON.parse(startValue))
            setMaxValue(JSON.parse(maxValue))
            setCount(JSON.parse(count))
        }
    }

    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value < maxValue) {
            setWarning(true)
            setErrorStart(false)
        } else {
            setErrorStart(true)
        }
        setStartValue(+e.currentTarget.value)
    }

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value > startValue) {
            setWarning(true)
            setErrorMax(false)
            setErrorStart(false)
        } else {
            setErrorMax(true)
        }
        setMaxValue(+e.currentTarget.value)
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
