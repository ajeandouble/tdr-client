import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../redux/store';
import axios from 'axios';

function AuthRoute({ component: Component, authenticated, ...rest }) {
	if (!authenticated && localStorage.getItem('FirebaseIdToken')) {
		
	}
	if (!axios.defaults.headers.common['Authorization']) {
		axios.defaults.headers.common['Authorization'] = localStorage.FirebaseIdToken;
	}
	console.log(AuthRoute.name, axios.defaults.headers.common['Authorization'])
    // localStorage.setItem('FirebaseIdToken', `Bearer ${idToken}`); 
    // axios.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;
	console.log('authenticated', authenticated)
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === true ? <Component {...props} /> : <Redirect to = "/login" />
			}
		/>
	);
}

const mapStateToProps = (state) => ({ authenticated: state.user.authenticated })

export default connect(mapStateToProps)(AuthRoute);