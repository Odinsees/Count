import React, {ChangeEvent} from 'react';
import s from "./Input.module.css";

type PropsType = {
    value: number
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    error:boolean
}

export const Input: React.FC<PropsType> = ({value, callBack,error}) => {

    const OnChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        callBack(e)
    }

    return (
        <input
            className={error? `${s.Input}+${s.ErrorInput}` : s.Input}
            type="number"
            value={value}
            onChange={OnChangeHandler}
        />
    )

}