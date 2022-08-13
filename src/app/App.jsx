import React from "react";
import NavBar from "./components/navBar";
import Main from "./components/main";
import Login from "./components/login";
// import Users from "./components/users";
import { Route, Switch } from "react-router-dom";
import UserLayout from "./components/userLayout";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route ex path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={UserLayout} />
            </Switch>
        </>
    );
}

export default App;
