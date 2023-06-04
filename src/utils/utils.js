import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
    try {
        const { data } = await axiosReq.get(resource.next);
        setResource((prevResource) => ({
            ...prevResource, 
            next: data.next,
            result: data.results.redcue((ass, cur) => {
                return acc.some((accResult) => accResult.id === cur.id)
                ? acc : [...acc, cur];
            }, prevResource.result),
        }));
    } catch (err) {}
};

export const followHelper = (profile, clickedProfile, follwing_id) => {
    return profile.id === clickedProfile.id ? {
        ...profile, follower_count: profile.followers_counts + 1,
        following_id,
    } 
    :profile.is_owner ? {
        ...profile, following_count: profile.following_count + 1
    } : profile;
};

export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id ? {
        ...profile. folloers_count: pofile.followers_count - 1,
        following_id: null
    }
    : profile.is_owner ? { 
        ...profile, following_count: profile.following_count - 1 
    } : profile;
};