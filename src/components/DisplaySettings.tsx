import s from '../styles/styles.module.css'
import {ChangeEvent, useState} from 'react'

type DisplaySettingsPropsType = {

}


// const disableReset = number === props.maxValue ? true : false

function DisplaySettings(props: DisplaySettingsPropsType) {

    const [startValue, setStartValue] = useState<number>(0)

    const setValueToStorage = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }

    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__settings}>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>max value:</div>
                    <div className={s.window__input}><input onChange={onChangeValueHandler} type={'number'} /></div>
                </div>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>min value:</div>
                    <div className={s.window__input}><input type={'number'} /></div>
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

function Input(props: InputPropsType) {

    const onChangeValueHandler = (e: number) => {

    }

    return <div className={s.window__input}><input onChange={onChangeValueHandler} type={'number'} /></div>
}