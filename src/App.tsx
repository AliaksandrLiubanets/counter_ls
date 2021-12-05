import React, {useEffect, useState} from 'react'
import './App.css'
import s from './styles/styles.module.css'
import {FirstVariant} from './components/FirstVariant'
import {Link, Route, Routes} from 'react-router-dom'
import DisplayCounter from './components/DisplayCounter'

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    const [editMode, setEditMode] = useState<boolean>(false)

    const [isSecondVariant, setIsSecondVariant] = useState<boolean>(false)

    useEffect(() => {
        setMaxValue(Number(localStorage.getItem('maxValue')))
        setStartValue(Number(localStorage.getItem('startValue')))
    }, [])

    const setValueToStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    return <div className="App">
        <div className={s.header}>
                <Link to="/">
                    <span>first variant</span>
                </Link>
                <Link to="/second">
                    <span>second variant</span>
                </Link>
        </div>
        <div className={s.content}>
            <Routes>
                <Route path="/" element={<FirstVariant
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    setValueToStorage={setValueToStorage}
                    setEditMode={setEditMode}
                    maxValue={maxValue}
                    startValue={startValue}
                    editMode={editMode}
                    isSecondVariant={isSecondVariant}
                    // setIsSecondVariant={setIsSecondVariant}
                />}
                />
                <Route path="/counter" element={<DisplayCounter
                    editMode={editMode}
                    maxValue={maxValue}
                    startValue={startValue}
                    isSecondVariant={isSecondVariant}
                    // setIsSecondVariant={setIsSecondVariant}
                />}
                />
            </Routes>
        </div>

    </div>
}

export default App
