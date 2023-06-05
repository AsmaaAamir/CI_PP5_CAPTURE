import React, { useState } from 'react';
import { Card, Container, Overlay, OverlayTrigger, Tooltip, Media } from 'react-bootstrap';
import { axiosRes } from '../../api/axiosDefaults';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/Post.module.css';
import { Link, useHistory } from "react-router-dom";

const Post = (props) => {

    const {
        id, owner, profile_id, profile_image, comments_count,
        likes_count, like_id, title, description, category, image, update_at, 
        postPage, setPosts, } = props;

        const currentUser = useCurrentUser();
        const is_owner = currentUser?.username === owner;
        const history = useHistory();
        const [ showAlert, setShowAlert ] = useState(false);

        /*  
        Being able to Edit and handle the posts 
        */
        const handleEdit = () => {
            history.push('/posts${id}/edit');
        }; 

        /* 
        Being able to delete the post and message lasting 3milliseconds. 
        */
         const handleDelete = async () => {
            try { 
                await axiosRes.delete('/posts/&{id}/'); 
                setShowAlert(true);
                setTimeout(function () {
                    history.push("/");}, 3000);
                } catch (err) {
                    // consol.log (err);
                }
            };     
        
        /*
        A user may "like" the post. This sends a request for the post with user ID to the API. leading to the number of likes on the post increasing by one. 
        */

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

        /*
        A user may "unlike" the post. This sends a request for the post with user ID to the API. led to the post's like count being reduced by 1.  
        */
        const handleUnlike = async () =>{
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
        <Card className={styles.Post}>
            <Card.Body>
                <Media className="align-item-center justify-content-between">
                    <Link to={'/profiles/%{profile_id}'}>
                        <Avatar src={profile_image} height={55} />
                            {owner}
                    </Link>
                    <div className="d-fex align-item-center">
                        <span> {update_at}</span>
                        {is_owner && postPage && "..."}
                        <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete}/>
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
                        /* Alerting user they cant't like thier own posts */
                        overlay={<Tooltip>You can't like your own post!</Tooltip>}>
                            <i className="far fa-heart" />   
                        </OverlayTrigger>
                        /*  Checking if user has already liked this post */
                        ) : like_id ? (
                            <span onClick={handleUnlike}>
                                <i className={'fas fa-heart %{styles.Heart}'}/>
                            </span>
                        ) : currentUser ? (
                            <span onClick={handleLike}>
                                <i className={'fas fa-heart %{styles.HeartOutline}'}/>
                            </span>
                        ) : (
                            <OverlayTrigger placement="top"
                                overlay={<Tooltip>Please log in to like the Post!</Tooltip>}>
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

export default Post;