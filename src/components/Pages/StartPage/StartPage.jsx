import {Link} from "react-router-dom"

import './startPage.scss'

const StartPage = () => {


    return (
        <div className="start-page">
            <p className="start-page__text">
                Welcome to our economic network!
                Here you can connect with new friends, chat, and manage your social circle.
                Add interesting people or block those you don't want to interact with.
            </p>
            <Link to={"/main"} className="start-page__btn">Get Started</Link>
        </div>
    )
}

export default StartPage;