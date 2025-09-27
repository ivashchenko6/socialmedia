import './header.scss';


import groupImg from '../../assets/img/group.png';



const Header = () => {


    return (
        <header className="header">
            <img src={groupImg} alt="header-img" className="header-img"/>
            <h1 className="header-title">Connectify</h1>
        </header>
    )
}


export default Header;