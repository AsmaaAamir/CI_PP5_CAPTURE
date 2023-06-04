import React from 'react';
import { Card, Container, Overlay, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/AllPosts.module.css';

const AllPosts = (props) => {

    const {
        id, owner, profile_id, profile_image, comment_count,
        like_count, like_id, title, descrition, category, image, update_at, 
        postPage, setPosts, } = props;

        const currentUser = useCurrentUser();
        const is_owner = currentUser?.username === owner;

        const handleLike = async () => { 
            try {
                const { data } = await axiosRes.post("/likes/", { post: id});
                setPosts((prevPosts) => ({
                    ...prevPosts, 
                    result: prevPosts. result.map((post) => {
                        return post.id === id ? {
                            ...post, 
                            likes_count: post.likes_count + 1, 
                            like_id: data.id}
                        : post; 
                    }),
                }));
            } catch (err) {
                console.log(err)
            }
        };
        const handelUnlike = async () =>{
            try{ 
                await axiosRes.delete('/likes/${like_id}/');
                setPosts((prevPosts) => ({
                    ...prevPosts,
                    result: prevPosts.result.map((post) =>{
                        return post.id === id ? {
                            ...post, likes_count: post.likes_count - 1, 
                            like_id: null}
                        : post;
                    }),
                }));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card classNam={styles.Post}>
            <Card.Body>
                <Media className="align-item-center justify-content-between">
                    <Link to={'/profiles/%{profile_id}'}>
                        <Avatar src={profile_image} height={55} />
                            {owner}
                    </Link>
                    <div className="d-fex align-item0center">
                        <span> {update_at}</span>
                        {is_owner && postPage && "..."}
                    </div>
                </Media>
            </Card.Body>
            <Link tp={'/posts/${id}'}>
                <Card.Img src={image} alt={title}/>
            </Link>
            <Card.Body>
                {title && <Card.Title className="text-center">
                    {title}
                </Card.Title>}
                {category && <Card.Select>
                    {category}
                </Card.Select>}
                <div className={styles.PostBar}>
                    {is_owner ? (
                        <OverlayTrigger placement="top"
                        overlay={<Tooltip>You can't like your own post!</Tooltip>}>
                            <i className="far fa-heart" />   
                        </OverlayTrigger>
                        ) : like_id ? (
                            <span onClick={handleUnlike}>
                                <i className={'fas fa-heart %{styles.Heart}'}/>
                            </span>
                        ): currentUser ? (
                            <span onClick={handlelike}>
                                <i className={'fas fa-heart %{styles.HeartOutline}'}/>
                            </span>
                        ): (
                            <OverlayTrigger placement="top"
                                overlay={<Tooltip>Please log into like the Post!</Tooltip>}>
                                    <i className="far fa-heart" />
                            </OverlayTrigger>
                        )}
                        {likes_count}
                        <Link to={'/posts/${id}'}>
                            <i className="fas fa-comments"/>
                        </Link>
                        {comments_count}
                </div>


            </Card.Body>
        </Card>
    );
};

export default AllPosts;