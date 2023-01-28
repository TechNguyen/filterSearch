import classNames from 'classnames/bind'
import Style from './counter.module.scss'
import { useState } from 'react'
const cx = classNames.bind(Style)
function Counter() {
    const [temperatureValue, setTemperatureValue] = useState(10)
    const [temperatureColor, setTemperaturColor] = useState([
        { cold: true },
        { hot: false },
    ])
    const handleIncrease = () => {
        const newtemperatureValue = temperatureValue + 1
        if (temperatureValue > 29) return
        else if (newtemperatureValue >= 15) {
            setTemperaturColor([{ cold: false }, { hot: true }])
            setTemperatureValue(newtemperatureValue)
        } else if (temperatureValue >= 7) {
            setTemperaturColor([{ cold: true }, { hot: false }])
            setTemperatureValue(newtemperatureValue)
        } else return
    }
    const handleDecrease = () => {
        const newtemperatureValue = temperatureValue - 1
        if (temperatureValue > 30) return
        else if (newtemperatureValue >= 15) {
            setTemperaturColor([{ cold: false }, { hot: true }])
            setTemperatureValue(newtemperatureValue)
        } else if (temperatureValue > 7) {
            setTemperaturColor([{ cold: true }, { hot: false }])
            setTemperatureValue(newtemperatureValue)
        } else return
    }

    return (
        <div className={cx('counter-wrapper')}>
            <div className={cx('counter-content', temperatureColor)}>
                <p className={cx('temperatureValue')}> {`${temperatureValue}`}</p>
                <p className={cx('degred')}>
                    <sup>0</sup>C
                </p>
            </div>
            <div className="handleBtn">
                <button onClick={handleIncrease} className={cx('Incre-btn')}>
                    Increase
                </button>
                <button onClick={handleDecrease} className={cx('Decre-btn')}>
                    Decrease
                </button>
            </div>
        </div>
    )
}

export default Counter
