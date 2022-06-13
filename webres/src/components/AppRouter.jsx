import React, {Component, useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import { ACCESS_TOKEN } from '../constants';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

// const AppRouter = () => {
//     const {isAuth, isLoading} = useContext(AuthContext);
//
//     if (isLoading) {
//         return <Loader/>
//     }
//
//     return (
//         isAuth
//             ?
//             <Switch>
//                 {privateRoutes.map(route =>
//                     <Route
//                         component={route.component}
//                         path={route.path}
//                         exact={route.exact}
//                         key={route.path}
//                     />
//                 )}
//                 <Redirect to='/posts'/>
//             </Switch>
//             :
//             <Switch>
//                 {publicRoutes.map(route =>
//                     <Route
//                         component={route.component}
//                         path={route.path}
//                         exact={route.exact}
//                         key={route.path}
//                     />
//                 )}
//                 <Redirect to='/login'/>
//             </Switch>
//     );
// };


class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: true
        }

        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser() {
        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    authenticated: true,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                loading: false
            });
        });
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authenticated: false,
            currentUser: null
        });
        Alert.success("You're safely logged out!");
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        if(this.state.loading) {
            return <LoadingIndicator />
        }

        return (
            <div className="app">
                <div className="app-top-box">
                    <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
                </div>
                <div className="app-body">
                    <Switch>
                        <Route path="/login"
                               render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
                        <Route path="/signup"
                               render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </div>
                <Alert stack={{limit: 3}}
                       timeout = {3000}
                       position='top-right' effect='slide' offset={65} />
            </div>
        );
    }
}

export default AppRouter;
