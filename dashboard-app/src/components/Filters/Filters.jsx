import { useState } from "react";
import './styles.css';
import {HSpace} from "../HSpase";
import {UserFilters} from "./UserFilters";

export const Filters = () => {
    const [isOpened, setOpened] = useState(false);

    const handleToggle = () => setOpened(!isOpened);

    return (
        <div className='filters-container'>
            <div className={isOpened ? 'filter-title filter-isOpened' : 'filter-title'} onClick={handleToggle}>
                <img src={require('../../icons/filter.svg').default} alt="filter" />
                <HSpace size='m' />
                <span>Filters</span>
            </div>
            <HSpace size='xl' />
            {isOpened &&
                <UserFilters/>
            }
        </div>
    )
}