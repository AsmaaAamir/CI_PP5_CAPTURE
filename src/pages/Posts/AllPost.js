import React, { useEffect, useState } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";

import Post from "./Post";
import Asset from "../../components/Asset";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import PopularProfiles from "../profiles/PopularProfiles";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import styles from "../../styles/AllPosts.module.css";

function AllPost({ message, filter = ""}) {
    const [posts, setPosts] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] =  useState(false);
    const { pathname } = useLocation();

    const [ query, setQuery ] = useState("");

    useEffect (() => {
        const fetchPosts =  async () => {
            try {
                const { data } = await axiosReq.get('/posts/?${filter}search=${query}');
                setPosts(data);
                setHasLoaded(true);
            } catch (err) {
                //console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchPosts();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-2 p-lg-2" lg={8}>
                <PopularProfiles mobile/>
                <i className={'fas fa-serach ${styles.SearchIcon}'}/>
                <Form className={styles.SearchBar} onSubmit={(e) => e.preventDefault()}>
                    <Form.Control 
                        type="text"
                        className="mr-sm-2"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}/>
                </Form>
                {hasLoaded ? (
                    <>
                        {posts.results.length ? (
                            <InfiniteScroll children={posts.results.map((post) => (
                                <post key={post.id} {...post} setPosts={setPosts} />
                            ))}
                            dataLength={posts.results.length}
                            loader={<Asset Spinner />}
                            hasMore={!!posts.next}
                            next={() => fetchMoreData(posts, setPosts)}/>

                        ) : (
                            <Container className={styles.Content}>
                                <Asset src={NoResults} message={message}/>
                            </Container>
                        )}
                    </>
                ) : (
                    <Container className={styles.Content}>
                    <Asset spinner />
                </Container>
                )}
            </Col>
            <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
                <p>Popular profiles for desktop</p>
            </Col>
        </Row>
    );
}


export default AllPost;