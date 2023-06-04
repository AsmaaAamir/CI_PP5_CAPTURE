import React from "react";
import { Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopualrProfiles = ({ mobile }) => {
    const { popualrProfiles } = useProfileData();

    return (
        <Container className={'${styles.Content} ${ mobile && "d-lg-none text-center mb-3"}'}> 
            {popualrProfiles.results.lenth ? (
                <>
                    <p>Most followed profiles.</p>
                        { mobile ? ( 
                            <div className="d-flex justif-content-around">
                                {popualrProfiles.results.slice(0,4).map((profile) => (
                                <Profile key={profile.id} profile={profile} mobile />
                            ))}
                            </div>
                        ) : (
                            popualrProfiles.results.map((profile) => (
                                <Profile key={profile.id} profile={profile}/>
                            ))
                             )}
                </>
            ) : (
                <Asset spinner />
                )}
        </Container>
    );
};

export default PopualrProfiles;