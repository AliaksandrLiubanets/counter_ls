import s from '../styles/styles.module.css'
import {ChangeEvent} from 'react'
import {Button} from './Button'
import {Input} from './Input'
import {Link} from 'react-router-dom'

type DisplaySettingsPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setValueToStorage: () => void
    setEditMode: (editMode: boolean) => void
    maxValue: number
    startValue: number
    editMode: boolean
    isSecondVariant: boolean
}

function DisplaySettings(props: DisplaySettingsPropsType) {

    const setValueToStorage = () => {
        if (props.editMode) {
            if ( props.startValue >= 0 && props.maxValue > props.startValue) {
                props.setValueToStorage()
                props.setEditMode(false)
            }
        }
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

    const inputMaxStyle = `${(props.maxValue < 0 || props.maxValue === props.startValue) && s.window__input_error}`
    const inputStartStyle = `${(props.startValue < 0 || props.maxValue === props.startValue) && s.window__input_error}`

    return <div className={s.window__frame}>
        <div className={s.window__large}>
            <div className={s.window__settings}>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>
                        max value:
                    </div>
                    <Input className={inputMaxStyle}
                           handler={onChangeMaxValueHandler}
                           value={props.maxValue}/>
                </div>
                <div className={s.window__settings__box}>
                    <div className={s.window__settings__value}>
                        start value:
                    </div>
                    <Input className={inputStartStyle}

                           handler={onChangeStartValueHandler}
                           value={props.startValue}/>
                </div>
            </div>
        </div>
        <div className={s.window__small}>
            {
                props.isSecondVariant
                    ? <Link to={'/counter'}>
                        <Button title={'set'}
                                handler={setValueToStorage}
                                buttonStyle={setStyle}
                        />
                    </Link>
                    : <Button title={'set'}
                              handler={setValueToStorage}
                              buttonStyle={setStyle}
                    />
            }
        </div>

    </div>
}

export default DisplaySettings
