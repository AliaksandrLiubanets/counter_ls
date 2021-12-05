import DisplaySettings from './DisplaySettings'
import DisplayCounter from './DisplayCounter'
import React from 'react'
import s from '../styles/styles.module.css'

type PropsType = {
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    setValueToStorage: () => void
    setEditMode: (editMode: boolean) => void
    maxValue: number
    startValue: number
    editMode: boolean
}

export function FirstVariant({setMaxValue, setStartValue, setValueToStorage, setEditMode, maxValue, startValue, editMode}: PropsType) {
    return <div className={s.first__block}>
        <DisplaySettings setMaxValue={setMaxValue}
                         setStartValue={setStartValue}
                         setValueToStorage={setValueToStorage}
                         setEditMode={setEditMode}
                         maxValue={maxValue}
                         startValue={startValue}
                         editMode={editMode}
        />
        <DisplayCounter editMode={editMode} maxValue={maxValue} startValue={startValue}/>
    </div>
}