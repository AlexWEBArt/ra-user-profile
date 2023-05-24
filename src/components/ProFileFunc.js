import { useState, useEffect } from "react";
import { getProfilesList, getProfileDetails } from './FetchApiFunc'
import List from "./ListFunc";
import Details from "./DetailsFunc";

export default function Profile() {
    const [profiles, setProfiles] = useState({
        // url: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json',
        // urlDetails: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/',
        profilesList: []
    });
    const [preloader, setPreloader] = useState(false);
    const [profileDetails, setProfileDetails] = useState(null);

    const handleClickItemList = (id) => {
        if (profileDetails && profileDetails.id === id ) {
            setProfileDetails(null)
        } else {
            setProfileDetails(null)
            getProfileDetails(process.env.REACT_APP_PROFILE_URL, id).then(result => {
                setProfileDetails(result);
            })
        }
        
        setPreloader(true);
    }

    useEffect(() => {
        getProfilesList(process.env.REACT_APP_USERS_URL).then(result => {
            setProfiles({ profilesList: result});
        })
    }, [setProfiles])

    useEffect(() => {
        setPreloader(false);
    }, [profileDetails])

    return (
        <div className="main-content">
            <List handle={handleClickItemList} profilesList={profiles.profilesList}/>
            {profileDetails ? <Details {...profileDetails}/> : preloader && null}
        </div>
    )
}