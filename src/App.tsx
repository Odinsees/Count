import React, {ChangeEvent, useEffect, useState} from 'react';

import {NumberWindow} from "./Components/NumberWindow/NumberWindow";
import {ValueWindow} from "./Components/ValueWindow/ValueWindow";

const App = () => {

    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [error, setError] = useState(false)

    useEffect(() => {
        getLocalStorageHandler()
    }, [])

    const getLocalStorageHandler = () => {
        let startValue = localStorage.getItem("startValue")
        let maxValue = localStorage.getItem("maxValue")
        if (startValue && maxValue) {
            setStartValue(JSON.parse(startValue))
            setMaxValue(JSON.parse(maxValue))
        }
    }


    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            setMaxValue(+e.currentTarget.value)
            setError(false)
        } else {
            setError(true)
        }
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            setStartValue(+e.currentTarget.value)
            setError(false)
        } else {
            setError(true)
        }
    }

    const setItemInLocalStorage = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }

    return (
        <div>
            <NumberWindow
                maxValue={maxValue}
                startValue={startValue}
            />
            <ValueWindow
                SetMaxValueCallBack={setMaxValueHandler}
                SetStartValueCallBack={setStartValueHandler}
                setItemInLocalStageCallBack={setItemInLocalStorage}
                maxValue={maxValue}
                startValue={startValue}
                error={error}
            />
        </div>
    )
}

export default App;
