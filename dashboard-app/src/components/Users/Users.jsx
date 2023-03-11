import {UsersRow} from "./UsersRow";
import './styles.css';
import {VSpace} from "../Vspace";
import {Filters} from "../Filters/Filters";

export const Users = ({ users }) => {
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
                {users.map((user) => (
                    <>
                        <UsersRow key={user.id} user={user} />
                        <VSpace size='m' />
                    </>
                ))}
            </div>
        </>
    )
}