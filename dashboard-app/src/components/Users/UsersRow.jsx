import {UsersCell} from "./UsersCell";
import {useState} from "react";
import './styles.css';
import {HSpace} from "../HSpase";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../models/usersSlice";

export const UsersRow = ({ user }) => {
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();

    const handleToggleActive = () => -setActive(!isActive)
    const handleDelete = () => {
        dispatch(deleteUser(user.id))
    }

    return (
        <div className="table-row">
            <div className="table-row__cells">
                <UsersCell isActive={isActive} text={user.name} />
                <UsersCell isActive={isActive} text={user.email} />
                <UsersCell isActive={isActive} text={user.address} />
            </div>
            <div className="table-row__buttons">
                <div className='row-btn' onClick={handleToggleActive}>
                    <img src={require('../../icons/pen.svg').default} alt="edit"/>
                </div>
                <HSpace size='l' />
                <div className='row-btn' onClick={handleDelete}>
                    <img src={require('../../icons/basket.svg').default} alt="edit"/>
                </div>
            </div>
        </div>
    )
}