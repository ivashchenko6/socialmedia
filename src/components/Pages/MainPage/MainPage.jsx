import FriendsAndBlockedList from '../../FriendsAndBlockedList/FriendsAndBlockedList';
import UsersList from '../../UsersList/UsersList';

import './mainPage.scss';

const MainPage = ({ users }) => {
    return (
        <div className='main-page'>
            <UsersList users={users} />
            <FriendsAndBlockedList />
        </div>
    );
};

export default MainPage;
