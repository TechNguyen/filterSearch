import classNames from 'classnames/bind'
import Style from './counter.module.scss'
import { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'
const cx = classNames.bind(Style)
function Counter() {
    const [input, setInput] = useState('')
    return (
        <div className={cx('counter-wrapper')}>
            <div className={cx('counter-content')}>
                <input
                    placeholder="...Search"
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                />
                <div className={cx('data-list')}>
                    {JSONDATA.filter((data) => {
                        if (input == '') {
                            return
                        } else if (
                            data.first_name.toUpperCase().includes(input.toUpperCase())
                        ) {
                            return data
                        }
                    }).map((data) => (
                        <p key={data.id}>{data.first_name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Counter
