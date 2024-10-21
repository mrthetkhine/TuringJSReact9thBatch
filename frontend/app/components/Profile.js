import  './Profile.css';

export default function Profile({profile}) {
    return (<div>
        <div className="profile">
            <img className="profile-image"
                 src={profile.url} alt="" />
            <div className="profile-name"> {profile.name}</div>
        </div>
    </div>);
}