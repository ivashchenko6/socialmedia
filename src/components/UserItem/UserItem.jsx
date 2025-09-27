import profilePicture from '../../assets/img/profile-picture.jpg';
import addFriendImage from '../../assets/img/add-friend.png';

import './userItem.scss';
const UserItem = ({ user }) => {
    return (
        <li className='users-list__item'>

            <img src={profilePicture} alt='' className='users-list__item-img' />

            <div className="users-list__item-wrapper">
                <div className='users-list__item-text'>
                    <p className='users-list__item-name'>Name: {user.name}</p>
                    <p className='users-list__item-username'>
                        Username: {user.username}
                    </p>
                    <a href='#' className='users-list__item-email'>
                        {user.email}
                    </a>



                </div>
                <div className='users-list__btns-group' onClick={() => console.log(1)}>
                    <button className='users-list__add-friend'>
                        <img src={addFriendImage} alt='add-friend__image' />
                    </button>
                </div>
            </div>



        </li>
    );
};

export default UserItem;
