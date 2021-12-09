import {ChangeEvent} from 'react'
import s from '../styles/styles.module.css'

type InputPropsType = {
    className: string
    handler: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}

export function Input({className, handler, value}: InputPropsType) {
    return <div className={s.window__input}>
        <input className={className}
               onChange={handler}
               value={value}
               type={'number'}/>
    </div>
}