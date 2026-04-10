import profiles from "./assets/people.json";

// So this is the basic - simple one (for image make json of image files by name - i.e. access by key)
function Profiles() {
    const displayProfiles = profiles.map(profile =>
        <>
            <h2>{profile.name}</h2>
            <p>{profile.desc}</p>
            <a href={profile.source} target="_blank">Wikipedia Link</a>
        </>
    )
    return <>{displayProfiles}</>
}

export default Profiles;