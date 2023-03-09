export const GamesTable = ({ games }) => {
    return (
        <table className="table">
            <tr>
                <td>Mame</td>
                <td>Game category</td>
                <td>Creation date</td>
                <td>Удалить</td>
            </tr>
            {games.map((game) => (
                <tr key={game.id}>
                    <td>{game.name}</td>
                    <td>{game.gameCategory}</td>
                    <td>{game.createdDate}</td>
                    <td>У</td>
                </tr>
            ))}
        </table>
    )
}