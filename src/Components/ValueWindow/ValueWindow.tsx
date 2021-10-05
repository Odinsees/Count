import React, {ChangeEvent} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import s from "../ValueWindow/ValueWindow.module.css";


type PropsType = {
    SetMaxValueCallBack: (e: ChangeEvent<HTMLInputElement>) => void
    SetStartValueCallBack: (e: ChangeEvent<HTMLInputElement>) => void
    setItemInLocalStageCallBack: () => void
    maxValue: number
    startValue: number
    errorStart: boolean
    errorMax: boolean
}

export const ValueWindow: React.FC<PropsType> = (props) => {

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.SetMaxValueCallBack(e)
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.SetStartValueCallBack(e)
    }

    const setItemInLocalStorageHandler = () => {
        props.setItemInLocalStageCallBack()
    }

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
                <Button callBack={setItemInLocalStorageHandler} title={"SET"} disabled={props.errorStart || props.errorMax}/>
            </div>
        </div>
    )
}
