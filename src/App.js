import logo from "../src/assets/logo.jpg";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom"; 
import AllPosts from '../src/pages/Posts/AllPosts';
import Welcomepage from "./components/Welcomepage";
import "./api/axiosDefaults";
import SignInForm from '../src/pages/auth/SignInForm';
import SignUpForm from '../src/pages/auth/SignUpForm';
import AddPostForm from '../src/pages/Posts/AddPostForm';


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
                <Route exact path="/signin" render={ () => <SignInForm /> }/>
                <Route exact path="/signup" render={ () => <SignUpForm /> }/>
                <Route exact path="/logout" render={ () => <h1>Log Out</h1> }/>
            </Switch>
        </Container>
    </div>
    
  );
}

export default App;
