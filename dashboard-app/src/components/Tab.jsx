export const Tab = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
        >
            <span>{text}</span>
        </button>
    )
}
