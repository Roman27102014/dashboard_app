import {NavTab} from "../NavTab";
import {useState} from "react";
import './styles.css';
import {HSpace} from "../HSpase";

export const Nav = () => {
    const [table, setTable] = useState('Users');

    const handleClick = (value) => {
        setTable(value);
    };

    return (
        <nav className="nav">
            <NavTab
                text="Users"
                onClick={() => handleClick('Users')}
                active={table === 'Users'}
            />
            <HSpace size='m' />
            <NavTab
                text="Games"
                onClick={() => handleClick('Games')}
                active={table === 'Games'}
            />
        </nav>
    )
}