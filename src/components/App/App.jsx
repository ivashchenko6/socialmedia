import { useEffect, useState } from "react";
import UsersList from "../UsersList/UsersList";
import "./app.scss";
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
            <h1 className="title">All Users: </h1> <hr></hr>
            <UsersList users={users} />
        </div>
    );
};

export default App;
