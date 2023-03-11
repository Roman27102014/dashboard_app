import {UsersRow} from "./UsersRow";
import './styles.css';
import {VSpace} from "../Vspace";
import {Filters} from "../Filters/Filters";
import React from "react";
import {useSelector} from "react-redux";

export const Users = () => {
    const users = useSelector((state) => state.users);

    return (
        <>
            <Filters />
            <VSpace size='xl' />
            <div className='table-head'>
                <div className='table-row__cells'>
                    <span className='users-cell'>Name</span>
                    <span className='users-cell'>Game category</span>
                    <span className='users-cell'>Creation date</span>
                </div>
            </div>
            <VSpace size='m' />
            <div>
                {users && users.map((user) => (
                    <React.Fragment key={user.id}>
                        <UsersRow user={user} />
                        <VSpace size='m' />
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}