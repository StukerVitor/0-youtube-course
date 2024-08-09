import profilePic from "./assets/Vitor-linkedin.jpg";

function Card() {

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Stuker Code</h2>
            <p className="card-text">I'm a software engineer at Dell Technologies</p>
        </div>
    );
}

export default Card;