import React, {useState} from 'react'
import './App.css'
import DisplayCounter from './components/DisplayCounter'
import DisplaySettings from './components/DisplaySettings'

function App() {

    // const [maxNumber, setMaxNumber] = useState(maxValue)
    localStorage.setItem('maxValue', '5')
    const maxValueStr = localStorage.getItem('maxValue')
    if (maxValueStr) {
        const maxValue = JSON.parse(maxValueStr)
    }


    return (
        <div className="App">
            <DisplaySettings/>
            <DisplayCounter maxValue={5} minValue={0} startValue={3}/>
        </div>
    )
}

export default App
