import React from "react";
import  { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/Profile.module.css";

const Profile = (props) => { 
    const { profile, mobile, imageSize = 55} = props;
    const { id, following_id, image, owner } = profile;
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username ===  owner;
    const { handleFollow, handleUnfollow } = useSetProfileData();

    return(
        <div calssName={'my-3 d-flex align-item-center ${mobile && "flex=column"}'}>
            <div>
                <Link to={'/profile/${id}'}className="align-self-center">
                    <Avatar src={image} height={imageSize}/>
                </Link>
            </div>
            <div className={'mx-2 ${styles.Break}'}>
                <strong>{owner}</strong>
            </div>
            <div className={'text=right ${!mobile && "ml-auto"}'}>
                {!mobile && currentUser && !is_owner && (following_id ? (
                    <Button className={'${styles.Button} ${styles.BlackOutline}'}
                        onClick={() => handleUnfollow(profile)}>
                            Unfollow 
                    </Button>
                ) : (
                    <Button className={'${styles.Button} ${styles.Black}'}
                        onClick={() => handleFollow(profile)}>
                            Follow 
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default Profile;