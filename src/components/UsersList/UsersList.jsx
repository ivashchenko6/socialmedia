import UserItem from "../UserItem/UserItem";

import "./usersList.scss";
const UsersList = ({ users }) => {
    const userItem = users.map((user, i) => {
        return <UserItem key={user.id} user={user} />;
    });

    return <ul className="users-list">{userItem}</ul>;
};

export default UsersList;
