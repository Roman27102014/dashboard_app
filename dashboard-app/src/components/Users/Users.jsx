import {UsersRow} from "./UsersRow";
import '../../styles.css';
import {VSpace} from "../Vspace";
import {Filters} from "../Filters/Filters";
import React from "react";
import {useSelector} from "react-redux";
import {NewUserRow} from "./NewUserRow";
import {CreateButton} from "../CreateButton/CreateButton";
import {useCreatable} from "../../hooks";
import {UserFilters} from "../Filters/UserFilters";

const names = [
    { id: 1, string: 'Name' },
    { id: 2, string: 'Email' },
    { id: 3, string: 'Address' },
];

export const Users = () => {
    const users = useSelector((state) => state.users ?? []);
    const { isCreatable, handleToggle } = useCreatable();

    return (
        <>
            <Filters>
                <UserFilters />
            </Filters>
            <VSpace size='m' />
            <CreateButton onClick={handleToggle} />
            <VSpace size='m' />
            <div className='table-head'>
                <div className='table-row__cells'>
                    {names.map((name) => (
                        <span key={name.id} className='users-cell'>{name.string}</span>
                    ))}
                </div>
            </div>
            <VSpace size='m' />
            {isCreatable &&
                <>
                    <NewUserRow onClick={handleToggle} />
                    <VSpace size='m' />
                </>
            }
            {users.length > 0 && users.map((user) => (
                <React.Fragment key={user.id}>
                    <UsersRow user={user} />
                    <VSpace size='m' />
                </React.Fragment>
            ))}
        </>
    )
}