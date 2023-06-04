import React from "react";
import  { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useSetProfileData } "../../contexts/ProfileDataContext";

const Profile = (props) => { 
    const { profile, mobile, imageSize = 55} = props;
    const { id, following_id, image, owner } = profile;
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username ===  owner;
    const { handleFollow, handleUnfollow } = useSetProfileData();

    return(
        
    )
}