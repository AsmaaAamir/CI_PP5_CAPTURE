import { createContext, useContext, useEffect, useState} from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const ProfileDataContext = ({ children }) => {
    const [profileData, setProfileData] = useState ({
        pageProfile: { results: [] },
        popularProfiles: { result: [] },
    });

    const currentUser = useCurrentUser();

    const handleFollow = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post("/followers/", {
                followed: clickedProfile.id,
            });

            setProfileData((prevState) => ({
                ...prevState, pageProfile: {
                    result: prevState.pageProfile.results.map((profile) =>
                    followHelper(profile, clickedProfile, data.id)
                    ),
                },
            }));
        } catch (err) {
            console.log(err);
        }
    };


    const handleUnfollow = async (clickedProfile) => {
        try {
            await axiosRes.delete('/followers/${clickedProfile.following_id}/');

            setProfileData((prevState) => ({
                ...prevState, pageProfile: {
                    result: prevState.pageProfile.results.map((profile) =>
                    UnfollowHelper(profile, clickedProfile)
                    ),
                },
                popualrProfiles: {
                    ...prevState.popualrProfiles,
                    results: prevState.popualrProfiles.result.map((profile) => 
                    unfollowHelper(profile, clickedProfile)
                    ),
                },
            }));
        } catch (err) {
            console.log(err);
        }     
    };

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await asxioReq.get(
                    "/profiles/?ordering=-followers_count"
                );
                setProfileData((prevState) => ({
                    ...prevState, popualrProfiles: data,
                }));
            } catch (err){
                consolr.lof(err);
            }
        };
        handleMount();
    }, [currentUser]);
        
    return(
        <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider value={{ set.setProfileData, handleFollow, handleUnfollow }}>
                { children }
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    );
};

