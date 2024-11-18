

interface ProfileData {
    readonly name: string;
    readonly image:string;
}

export default function Profile({profile}: { profile:ProfileData })
{
    let str= "Hello";
    //let result = str* 2;
    return (<div>
        Profile
        <h1> {profile.name}</h1>
        <img src={profile.image}/>
    </div>);
}