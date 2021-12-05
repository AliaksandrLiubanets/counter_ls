import React, {useEffect, useState} from 'react'
import './App.css'
import s from './styles/styles.module.css'
import {FirstVariant} from './components/FirstVariant'

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        setMaxValue(Number(localStorage.getItem('maxValue')))
        setStartValue(Number(localStorage.getItem('startValue')))
    }, [])

    const setValueToStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    return <div className="App">
        <div className={s.header}>Header

        </div>
        <div className={s.content}>
            <FirstVariant setMaxValue={setMaxValue}
                          setStartValue={setStartValue}
                          setValueToStorage={setValueToStorage}
                          setEditMode={setEditMode}
                          maxValue={maxValue}
                          startValue={startValue}
                          editMode={editMode}
            />
        </div>

    </div>
}

export default App
