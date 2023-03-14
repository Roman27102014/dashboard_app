import {Filter} from "./Filter";
import {HSpace} from "../HSpase";
import {useState} from "react";
import {UserInput} from "./UserInput";

export const GameFilters = () => {
    const [filterName, setFilterName] = useState('Name');

    const handleClick = (value) => {
        setFilterName(value);
    }

    return (
        <div className='user-filters-container'>
            <div className='user-filters'>
                <Filter text='Name' isActive={filterName === 'Name'} setActive={() => handleClick('Name')} />
                <HSpace size={'l'} />
                <Filter text='Category' isActive={filterName === 'Category'} setActive={() => handleClick('Category')} />
                <HSpace size={'l'} />
                <Filter text='Date' isActive={filterName === 'Date'} setActive={() => handleClick('Date')} />
            </div>
            {filterName === 'Name' &&
                <UserInput placeholder='Name'/>}
            {filterName === 'Category' &&
                <UserInput placeholder='Category'/>}
            {filterName === 'Date' &&
                <UserInput placeholder='yyyy-mm-dd'/>}
        </div>
    )
}