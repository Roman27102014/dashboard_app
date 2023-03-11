export const UsersCell = ({ isActive, text }) => {
    return (
        <div className="users-cell">
            {isActive ? (
                <input type="text" placeholder={text}/>
            ) : (
                <span>{text}</span>
            )}
        </div>
    )
}