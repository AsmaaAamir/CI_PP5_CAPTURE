import logo from "../src/assets/logo.jpg";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom"; 
import Home from '../src/pages/Home';
import Welcomepage from "./components/Welcomepage";

 

function App() {
  return (
    <div className={styles.App}>
        <Home />
            <Switch>
                <Route exact path="/" render={ () => <Welcomepage/>  }/>
                <Route exact path="/home" render={ () => <Home/> }/>
                <Route exact path="/profile" render={ () => <h1>Profile</h1> } />
                <Route exact path="/addpost" render={ () => <h1>Add Post</h1> }/>
                <Route exact path="/signin" render={ () => <h1>Sign In</h1> }/>
                <Route exact path="/signup" render={ () => <h1>Sign Up</h1> }/>
                <Route exact path="/logout" render={ () => <h1>Log Out</h1> }/>
            </Switch>
    </div>
  );
}

export default App;
