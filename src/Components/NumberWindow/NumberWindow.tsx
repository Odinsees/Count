import React, {useEffect, useState} from 'react';
import s from "./NumberWindow.module.css";
import {Number} from "../Number/Number";
import {Button} from "../Button/Button";

type PropsType = {
    maxValue: number
    startValue: number
}

export const NumberWindow: React.FC<PropsType> = (props) => {

    const startValue = props.startValue
    const maxValue = props.maxValue
    const [count, setCount] = useState(startValue)
    const countUpHandler = (): boolean | void => count < maxValue && setCount(count => count + 1)
    const countResetHandler = (): void => setCount(startValue)

    useEffect(() => {
        getLocalStorageHandler()
    }, [])

    useEffect(() => {
        setLocalStorageHandler()
    }, [count])

    const setLocalStorageHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(count))
    }
    const getLocalStorageHandler = () => {
        let value = localStorage.getItem("counterValue")
        if (value) {
            setCount(JSON.parse(value))
        }
    }
    const isAddDisabled = count === maxValue
    const isResetDisabled = count < maxValue

    return (
        <div className={s.Fon}>
            <div className={s.Content}>
                <div className={s.Number}>
                    <Number
                        maxValue={maxValue}
                        value={count}
                    />
                </div>
                <div className={s.Button}>
                    <div className={s.addButton}>
                        <Button
                            title={"inc"}
                            callBack={countUpHandler}
                            disabled={isAddDisabled}
                        />
                    </div>
                    <div className={s.resetButtons}>
                        <Button
                            title={"reset"}
                            callBack={countResetHandler}
                            disabled={isResetDisabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}