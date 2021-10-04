import React, {useState} from 'react';
import {Button} from "./Components/Button";
import s from "./App.module.css";
import {Number} from "./Components/Number";

const App = () => {

    const startValue = 0
    const maxValue = 5
    const [count, setCount] = useState(startValue)
    //const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => setCount(+e.currentTarget.value)
    const countUpHandler = (): boolean | void => count < maxValue && setCount(count => count + 1)
    const countResetHandler = (): void => setCount(startValue)
    const setLocalStorageHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(count))
        localStorage.setItem("counterValue +1", JSON.stringify(count + 1))
    }
    const getLocalStorageHandler = () => {
        let value = localStorage.getItem("counterValue")
        if (value) {
            setCount(JSON.parse(value))
        }
    }
    const ClearLocalStorageHandler = () => {
        localStorage.clear()
        setCount(0)
    }
    const RemoveItemFromLocalStorageHandler = () => {
        localStorage.removeItem("counterValue +1")
    }
    const isAddDisabled = count === maxValue
    const isResetDisabled = count < maxValue

    return (
        <div className={s.Fon}>
            <div className={s.Content}>
                <div className={s.Input}>
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
                <Button
                    title={"SetLS"}
                    callBack={setLocalStorageHandler}
                />
                <Button
                    title={"GetFromLS"}
                    callBack={getLocalStorageHandler}
                />
                <Button
                    title={"ClearLS"}
                    callBack={ClearLocalStorageHandler}
                />
                <Button
                    title={"RemoveItemLS"}
                    callBack={RemoveItemFromLocalStorageHandler}
                />
            </div>
        </div>
    )
}

export default App;
