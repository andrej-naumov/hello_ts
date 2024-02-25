import './styles.css';

function ProfileCard({profileInfo}) {
    return (
        <div className="profile-card">
            <img src={profileInfo.src} alt="Аватар" />
            <h2 className={(profileInfo.age) > 50 ? "senior" : "junior"}>{profileInfo.firstName} {profileInfo.lastName}</h2>
            {/* <h2 className={(profileInfo.age) > 50 ? "senior" : "junior"}>{normalizedName()}</h2> */}
            <p>Работа - {profileInfo.job}</p>
            <p>Цвет волос: {profileInfo.hairColor}, Рост: {profileInfo.height}</p>
            <p>Хобби: {profileInfo.hobby}</p>
        </div>
    );
}

export default ProfileCard;