import logo from "../src/assets/logo.jpg";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom"; 
import AllPosts from './pages/Posts/Post';
import Welcomepage from "./components/Welcomepage";
import "./api/axiosDefaults";
import SignInForm from '../src/pages/auth/SignInForm';
import SignUpForm from '../src/pages/auth/SignUpForm';
import AddPostForm from '../src/pages/Posts/AddPostForm';
import PostPage from "./pages/Posts/PostPage";
import EditPostForm from "./pages/Posts/EditPostForm";


function App() {
  return (
    <div className={styles.App}>
        <Container className={styles.Body}>
            <div> 
                <Switch>
                    <Route exact path="/" render={ () => <Welcomepage/> }/> 
                </Switch>
            </div>
        </Container> 
        <NavBar/>
        <Container className={styles.Main}>
            <Switch>
                <Route exact path="/feed" render={ () => <AllPosts/> }/>
                <Route exact path="/profile" render={ () => <h1>Profile</h1> }/>
                <Route exact path="/posts/addpost" render={ () => <AddPostForm/> }/>
                <Route exact path="/posts/:id" render={ () => <PostPage/> }/>
                <Route exact path="/posts/:id/edit" render={ () => <EditPostForm/> }/>
                <Route exact path="/signin" render={ () => <SignInForm /> }/>
                <Route exact path="/signup" render={ () => <SignUpForm /> }/>
                <Route render={() => <p>Page Not Found! </p>}/>
            </Switch>
        </Container>
    </div>
  );
}

export default App;
