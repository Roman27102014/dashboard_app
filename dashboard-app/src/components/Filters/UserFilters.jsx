import {Filter} from "./Filter";
import {HSpace} from "../HSpase";
import {useState} from "react";
import {UserInput} from "./UserInput";

export const UserFilters = () => {
    const [filterName, setFilterName] = useState('Date');

    const handleClick = (value) => {
        setFilterName(value);
    }

    return (
        <div className='user-filters-container'>
            <div className='user-filters'>
                <Filter text='Date' isActive={filterName === 'Date'} setActive={() => handleClick('Date')} />
                <HSpace size={'l'} />
                <Filter text='Category' isActive={filterName === 'Category'} setActive={() => handleClick('Category')} />
                <HSpace size={'l'} />
                <Filter text='Range' isActive={filterName === 'Range'} setActive={() => handleClick('Range')} />
            </div>
            {filterName === 'Date' &&
                <UserInput placeholder='yyyy-mm-dd'/>}
            {filterName === 'Category' &&
                <UserInput placeholder='Category'/>}
            {filterName === 'Range' &&
                <UserInput placeholder='Range'/>}
        </div>
    )
}