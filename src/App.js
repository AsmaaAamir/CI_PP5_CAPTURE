import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom'; 
import "./api/axiosDefaults";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import Welcomepage from "./components/Welcomepage";
import SignInForm from "../src/pages/auth/SignInForm";
import SignUpForm from "../src/pages/auth/SignUpForm";
import AllPost from "../src/pages/Posts/AllPost";
import AddPostForm from "../src/pages/Posts/AddPostForm";
import PostPage from "./pages/Posts/PostPage";
import EditPostForm from "./pages/Posts/EditPostForm";
import Profile from "../src/pages/profiles/Profile";
import EditProfileForm from "../src/pages/profiles/EditProfileForm";


function App() {
    const currentUser = useCurrentUser();
    const profile_id = currentUser?.profile_id || ""; 
    
    return (
    <div className={styles.App}>
        <NavBar/>
        <Container className={styles.Body}> 
            {!currentUser ? (
                <Switch>
                    <Route exact path="/" render={ () => <Welcomepage/> }/> 
                    <Route exact path="/signin" render={ () => <SignInForm /> }/>
                    <Route exact path="/signup" render={ () => <SignUpForm /> }/>
                    <Route render={()=> <Welcomepage />} />
                </Switch>
            ) : ( 
                <Switch>
                    <Route exact path="/" render={() => ( <AllPost message="No results Found. Please try again"/>)}/>
                    <Route exact path="/feed" render={() => ( <AllPost message="No results Found. Please try again" filter={'owner_followed_owner_profiles=${profile_id}&'}/>
                    )}/>
                    <Route exact path="/liked" render={() => ( <AllPost message="No results Found. Please try again" filter={'likes_owner_profiles=${profile_id}&ordering=-likes_created_at&'}/>
                    )}/>
                    <Route exact path="/feed" render={ () => <AllPost/> }/>
                    <Route exact path="/profile" render={ () => <Profile /> }/>
                    <Route exact path="/posts/addpost" render={ () => <AddPostForm/> }/>
                    <Route exact path="/posts/:id" render={ () => <PostPage/> }/>
                    <Route exact path="/posts/:id/edit" render={ () => <EditPostForm/> }/>
                    <Route exact path="/profiles/:id/edit" render={ () => <EditProfileForm.js/>} />
                    <Route render={() => <p> Page Not Found! </p>} />
                </Switch>
            )}
        </Container>
    </div>
  );
}

export default App;
