import React, {ChangeEvent} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import s from "../ValueWindow/ValueWindow.module.css";


type PropsType = {
    SetMaxValueCallBack: (newValueMax: number) => void
    SetStartValueCallBack: (newValueStart: number) => void
    setItemInLocalStageCallBack: () => void
    maxValue: number
    startValue: number
    errorStart: boolean
    errorMax: boolean
    setButtonDisable: boolean
}

export const ValueWindow: React.FC<PropsType> = (props) => {

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValueMax = +e.currentTarget.value
        props.SetMaxValueCallBack(newValueMax)
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValueStart = +e.currentTarget.value
        props.SetStartValueCallBack(newValueStart)
    }

    const setItemInLocalStorageHandler = () => {
        props.setItemInLocalStageCallBack()
    }

    let setDisabled = props.errorStart || props.errorMax || props.setButtonDisable

    return (
        <div className={s.Wrapper}>
            <div className={s.InputBox}>
                <div className={s.ValueInput}>
                    <span>Max value:</span><Input value={props.maxValue} callBack={setMaxValueHandler}
                                                  error={props.errorMax}/>
                </div>
                <div className={s.ValueInput}>
                    <span>Start value:</span><Input value={props.startValue} callBack={setStartValueHandler}
                                                    error={props.errorStart}/>
                </div>
            </div>
            <div className={s.Button}>
                <Button callBack={setItemInLocalStorageHandler} title={"SET"} disabled={setDisabled}/>
            </div>
        </div>
    )
}
