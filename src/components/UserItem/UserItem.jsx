import profilePicture from "../../assets/img/profile-picture.jpg";

import "./userItem.scss";
const UserItem = ({ user }) => {
    return (
        <li className="users-list__item">
            {/* <div className="users-list__item-wrapper"></div> */}
            <img src={profilePicture} alt="" className="users-list__item-img" />
            <div className="users-list__item-text">
                <p className="users-list__item-name">Name: {user.name}</p>
                <p className="users-list__item-username">
                    Username: {user.username}
                </p>
                <a href="#" className="users-list__item-email">
                    {user.email}
                </a>
            </div>
        </li>
    );
};

export default UserItem;
