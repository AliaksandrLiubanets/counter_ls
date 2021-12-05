import React, {useEffect, useState} from 'react'
import './App.css'
import s from './styles/styles.module.css'
import {FirstVariant} from './components/FirstVariant'
import {Link, Route, Routes} from 'react-router-dom'
import {SecondVariant} from './components/SecondVariant'

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
        <div className={s.header}>
            <span><Link to="/">first variant</Link></span><span><Link to="/second">second variant</Link></span>
        </div>
        <div className={s.content}>
            <Routes>
                <Route path="/" element={<FirstVariant setMaxValue={setMaxValue}
                                                       setStartValue={setStartValue}
                                                       setValueToStorage={setValueToStorage}
                                                       setEditMode={setEditMode}
                                                       maxValue={maxValue}
                                                       startValue={startValue}
                                                       editMode={editMode} />}
                />
                <Route path="/second" element={<SecondVariant/>}/>
            </Routes>
            {/*<FirstVariant setMaxValue={setMaxValue}*/}
            {/*              setStartValue={setStartValue}*/}
            {/*              setValueToStorage={setValueToStorage}*/}
            {/*              setEditMode={setEditMode}*/}
            {/*              maxValue={maxValue}*/}
            {/*              startValue={startValue}*/}
            {/*              editMode={editMode}*/}
            {/*/>*/}
        </div>

    </div>
}

export default App
