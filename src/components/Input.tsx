import {ChangeEvent} from 'react'
import s from '../styles/styles.module.css'

type InputPropsType = {
    style: string
    handler: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}

export function Input({style, handler, value}: InputPropsType) {
    return <div className={s.window__input}>
        <input className={style}
               onChange={handler}
               value={value}
               type={'number'}/>
    </div>
}