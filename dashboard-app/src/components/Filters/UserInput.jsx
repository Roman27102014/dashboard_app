import {useState} from "react";
import {HSpace} from "../HSpase";

export const UserInput = ({ placeholder }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='user-input'>
            <div className="user-input-container">
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                <HSpace size='l' />
                <div className='filter-click filter-submit'>
                    <span>Confirm</span>
                </div>
            </div>
        </div>
    )
}