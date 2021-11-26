import s from '../styles/styles.module.css'
import {ChangeEvent} from 'react'

type DisplaySettingsPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setValueToStorage: () => void
    setEditMode: (editMode: boolean) => void
    maxValue: number
    startValue: number
    editMode: boolean
}

function DisplaySettings(props: DisplaySettingsPropsType) {

    const setValueToStorage = () => {
        props.setValueToStorage()
        props.setEditMode(false)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true)
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEditMode(true)
        props.setStartValue(Number(e.currentTarget.value))
    }

    const setStyle = `${((props.editMode && props.startValue < 0) || props.maxValue <= props.startValue) && s.button__disabled}`
    const isDisabled = ((props.editMode && props.startValue < 0) || props.maxValue <= props.startValue) && true

    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__settings}>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>max value:</div>
                    <div className={s.window__input}>
                        <input onChange={onChangeMaxValueHandler}
                               value={props.maxValue}
                               type={'number'}/>
                    </div>
                </div>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>start value:</div>
                    <div className={s.window__input}>
                        <input onChange={onChangeStartValueHandler}
                               value={props.startValue}
                               type={'number'}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.window__small}>
            <div>
                <button className={setStyle} disabled={isDisabled} onClick={setValueToStorage}>set</button>
            </div>
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