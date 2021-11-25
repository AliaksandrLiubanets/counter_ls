import React, {useEffect, useState} from 'react'
import './App.css'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'

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

    return (
        <div className="App">
            <DisplaySettings setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             setValueToStorage={setValueToStorage}
                             setEditMode={setEditMode}
            />
            <DisplayCounter editMode={editMode} maxValue={maxValue} startValue={startValue}/>
        </div>
    )
}

export default App
