import React, {ChangeEvent} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";


type PropsType = {
    SetMaxValueCallBack: (e: ChangeEvent<HTMLInputElement>) => void
    SetStartValueCallBack: (e: ChangeEvent<HTMLInputElement>) => void
    setItemInLocalStageCallBack: () => void
    maxValue: number
    startValue: number
    error: boolean
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
        <div>
            <Input value={props.startValue} callBack={setStartValueHandler}/><div>start</div>
            <Input value={props.maxValue} callBack={setMaxValueHandler}/><div>max</div>
            {props.error ? <div>Error, incorrect value. Input number more 0</div> : ""}
            <Button callBack={setItemInLocalStorageHandler} title={"SET"} disabled={props.error}/>
        </div>
    )
}
