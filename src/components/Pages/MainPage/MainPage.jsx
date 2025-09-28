import UsersList from '../../UsersList/UsersList';
import './mainPage.scss';



const MainPage = ({users}) => {



    return (
        <>
        <h1>Main Page</h1>
        <UsersList users={users} />
        </>

    )
}

export default MainPage;