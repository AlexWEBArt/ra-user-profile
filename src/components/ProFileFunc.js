import { useState, useEffect } from "react";
import { getProfilesList, getProfileDetails } from './FetchApiFunc'
import List from "./ListFunc";
import Details from "./DetailsFunc";

export default function Profile() {
    const [profiles, setProfiles] = useState({
        url: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json',
        profilesList: []
    });
    const [preloader, setPreloader] = useState(false);
    const [profileDetails, setProfileDetails] = useState(null);

    const handleClickItemList = (id) => {
        if (profileDetails && profileDetails.id === id ) {
            setProfileDetails(null)
        } else {
            setProfileDetails(null)
            getProfileDetails(profiles.url, id).then(result => {
                setProfileDetails(result);
            })
        }
        
        setPreloader(true);
    }

    useEffect(() => {
        getProfilesList(profiles.url).then(result => {
            setProfiles({ profilesList: result});
        })
    }, [])

    useEffect(() => {
        console.log(profileDetails)
        setPreloader(false);
    }, [profileDetails])

    return (
        <div className="main-content">
            <List handle={handleClickItemList} profilesList={profiles.profilesList}/>
            {profileDetails ? <Details {...profileDetails}/> : null}
        </div>
    )
}