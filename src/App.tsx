import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./App.module.css"

import {NumberWindow} from "./Components/NumberWindow/NumberWindow";
import {ValueWindow} from "./Components/ValueWindow/ValueWindow";

const App = () => {

    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [error, setError] = useState(false)
    let [count, setCount] = useState(0)
    let [warning,setWarning] = useState(false)

    const countUp = (): boolean | void => count < maxValue && setCount(count => count + 1)
    const countReset = (): void => setCount(startValue)

    useEffect(() => {
        getLocalStorageHandler()
    }, [])

    useEffect(() => {
        setLocalStorageNumberHandler()
    }, [count])

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
        setError(false)
        if (+e.currentTarget.value >= 0 && +e.currentTarget.value !== maxValue) {
            setStartValue(+e.currentTarget.value)
            setWarning(true)
            setError(false)
        } else {
            setStartValue(+e.currentTarget.value)
            setError(true)
        }
    }

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        if (+e.currentTarget.value >=0 && +e.currentTarget.value !== startValue) {
            setMaxValue(+e.currentTarget.value)
            setWarning(true)
            setError(false)
        } else {
            setMaxValue(+e.currentTarget.value)
            setError(true)
        }
    }


    return (
        <div className={s.Content}>
            <ValueWindow
                SetMaxValueCallBack={setMaxValueHandler}
                SetStartValueCallBack={setStartValueHandler}
                setItemInLocalStageCallBack={setItemInLocalStorage}
                maxValue={maxValue}
                startValue={startValue}
                error={error}
            />
            <NumberWindow
                maxValue={maxValue}
                startValue={startValue}
                count={count}
                countUpHandlerCallBack={countUp}
                countResetCallBack={countReset}
                error={error}
                warning={warning}
            />
        </div>
    )
}

export default App;
