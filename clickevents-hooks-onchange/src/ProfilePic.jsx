function ProfilePic() {
    const handleClick = (e) => e.target.style.display = "none";
    return(
        <img
            src="./src/assets/mr-depp.png"
            alt="Ops! Image failed to load."
            onClick={(e) => handleClick(e)}
        />
    );
}

export default ProfilePic;