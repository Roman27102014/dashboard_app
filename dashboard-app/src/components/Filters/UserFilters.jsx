import {Filter} from "./Filter";
import {HSpace} from "../HSpase";
import {useState} from "react";
import {UserInput} from "./UserInput";

export const UserFilters = () => {
    const [filterName, setFilterName] = useState('Name');

    const handleClick = (value) => {
        setFilterName(value);
    }

    return (
        <div className='user-filters-container'>
            <div className='user-filters'>
                <Filter text='Name' isActive={filterName === 'Name'} setActive={() => handleClick('Name')} />
                <HSpace size={'l'} />
                <Filter text='Email' isActive={filterName === 'Email'} setActive={() => handleClick('Email')} />
                <HSpace size={'l'} />
                <Filter text='Address' isActive={filterName === 'Address'} setActive={() => handleClick('Address')} />
            </div>
            {filterName === 'Name' &&
                <UserInput placeholder='Name'/>}
            {filterName === 'Email' &&
                <UserInput placeholder='example@mail.ex'/>}
            {filterName === 'Address' &&
                <UserInput placeholder='Address'/>}
        </div>
    )
}