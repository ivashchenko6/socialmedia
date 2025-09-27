import { useEffect, useState } from "react";
import UsersList from "../UsersList/UsersList";
import "./app.scss";
import Header from "../Header/Header";
const App = () => {
    const apiURL = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    useEffect(() => console.log(users), [users]);

    return (
        <div className="app">
            <Header/>
            <UsersList users={users} />
        </div>
    );
};

export default App;
