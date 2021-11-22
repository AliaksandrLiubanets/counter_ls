import React, {useState} from 'react'
import './App.css'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)

    // const maxValueStr = +localStorage.maxValue
    let max = Number(localStorage.getItem('maxValue'))
    let start = +localStorage.startValue

    const setValueToStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setStartValue(start)
    }

    return (
        <div className="App">
            <DisplaySettings setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             setValueToStorage={setValueToStorage}
            />
            <DisplayCounter maxValue={max} startValue={start}/>
        </div>
    )
}

export default App
