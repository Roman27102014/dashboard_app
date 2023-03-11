import './App.css';
import { users } from './constants/';
import {Nav} from "./components/Nav";
import {VSpace} from "./components/Vspace";
import {Users} from "./components/Users/Users";

function App() {
    return (
        <div className="wrapper">
            <h1 className="title">Games dashboard App</h1>
            <VSpace size='m' />
            <Nav />
            <VSpace size='m' />
            <Users users={users} />
        </div>
    );
}

export default App;