import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../redux/actions/userActions';

function Tdr({ dispatch }) {
	useEffect(() => {
		console.log('use effect')
		dispatch(getUserProfile());
	}, []);

	return (
		<>
				Tdr... ?
		</>
	);
}

const mapStateToProps = (state) => ({ authenticated: state.user.authenticated });

export default connect(mapStateToProps)(Tdr);