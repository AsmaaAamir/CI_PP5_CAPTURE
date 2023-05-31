import logo from "../src/assets/logo.jpg";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import { Router, Switch } from "react-router-dom"; 
 

function App() {
  return (
    <div className={styles.App}>
        <NavBar/>
        <Container >
            <Switch>
                <Router exact path="/" render={ () => <h1>Home</h1> }/>
                <Router exact path="/profile" render={ () => <h1>Profile</h1> } />
                <Router exact path="/addpost" render={ () => <h1>Add Post</h1> }/>
                <Router exact path="/signin" render={ () => <h1>Sign In</h1> }/>
                <Router exact path="/signup" render={ () => <h1>Sign Up</h1> }/>
                <Router exact path="/logout" render={ () => <h1>Log Out</h1> }/>
            </Switch>
        </Container>

    </div>
  );
}

export default App;
