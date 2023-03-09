import './App.css';
import { users, games } from './constants/';
import { UsersTable, Tab, GamesTable } from "./components";

function App() {
    return (
        <div className="wrapper">
            <h1>Games dashboard App</h1>
            <div className="filters">
                <Tab text="Games" onClick={() => {}} />
                <Tab text="Users" onClick={() => {}} />
            </div>
            <UsersTable users={users} />
            <GamesTable games={games} />
        </div>
    );
}

export default App;