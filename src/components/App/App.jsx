import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
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

            <Routes>
                <Route path="/" element={<MainPage users={users}/>} />

            </Routes>



        </div>
    );
};

export default App;
