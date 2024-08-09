
function ProfilePicture() {

    const imageUrl = './src/assets/Vitor-linkedin.jpg';

    const handleClick = (event) => {
        event.target.style.display = "none";
    }

    return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}

export default ProfilePicture