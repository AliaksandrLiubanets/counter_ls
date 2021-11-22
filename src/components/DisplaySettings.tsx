import s from '../styles/styles.module.css'
import {ChangeEvent} from 'react'

type DisplaySettingsPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setValueToStorage: () => void
    maxValue: number,
    minValue: number
}

function DisplaySettings(props: DisplaySettingsPropsType) {

   const setValueToStorage = () => {
        props.setValueToStorage()
    }


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => props.setMaxValue(Number(e.currentTarget.value))

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => props.setStartValue(Number(e.currentTarget.value))

    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__settings}>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>max value:</div>
                    <div className={s.window__input}>
                        <input value={props.maxValue} onChange={onChangeMaxValueHandler} type={'number'} />
                    </div>
                </div>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>start value:</div>
                    <div className={s.window__input}>
                        <input value={props.minValue} onChange={onChangeStartValueHandler} type={'number'} />
                    </div>
                </div>
            </div>
        </div>
        <div className={s.window__small}>
            <div ><button className={undefined} disabled={undefined} onClick={setValueToStorage}>set</button></div>
        </div>
    </div>
}
export default DisplaySettings

type InputPropsType = {
    onChangeHandler: () => void
}

// function Input(props: InputPropsType) {
//
//     const onChangeValueHandler = (e: number) => {
//
//     }
//
//     return <div className={s.window__input}><input onChange={onChangeValueHandler} type={'number'} /></div>
// }