import React, { useState } from 'react';
import { connect } from 'react-redux';

import appRoutes from '../helper/appRoutes';

import { withRouter } from 'react-router-dom';

import {
  IonButton,
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonHeader,
	IonToolbar,
	IonTitle,
	IonList,
	IonCol,
  IonRow,
  IonNav,
  IonGrid,
  IonSpinner,

} from '@ionic/react';

import { signupUser } from '../redux/actions/userActions';

import './Signup.css';

// import '../helper/firebase';
import { apiCall } from '../helper/apiHelper';
import axios from 'axios';

function Signup({ dispatch, history, ...props }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function submitSignUp(event) {
		event.preventDefault();
		const data = { email: email, password: password };
		dispatch(signupUser(data, history));
	}

	return (
		<IonPage className="">
		<IonContent>
			<IonToolbar className="ion-no-padding">
				Signup
			</IonToolbar>

			<IonGrid class="mainWrapper">

					<IonRow className="ion-justify-content-center ion-margin-top ion-margin-bottom">
						<IonCol className="inputWraper" size-xs="12" size-sm="8" size-md="6" size-lg="4" size-xl="3" >
							<IonItem lines="none" className="ion-margin-bottom" >
								<IonInput autocomplete="on" value={""} placeholder="Login" value={email} onIonChange={e => { setEmail(e.detail.value.toLowerCase().trim()) }}></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>

				<IonRow className="ion-justify-content-center ion-margin-top ion-margin-bottom">
					<IonCol className="inputWraper" >
						<IonItem className="ion-margin-bottom" lines="none">
							<IonInput autocomplete="on" className="passwordInput" value={password} onIonChange={(e) => setPassword(e.detail.value) } placeholder={"Password"} ></IonInput>  
						</IonItem>
					</IonCol>
				</IonRow>


				<IonRow className="ion-text-center">
					<IonCol>
						<IonButton onClick={event => submitSignUp(event)}>
							Signup
						</IonButton>
					</IonCol>
				</IonRow>

				<IonRow className="ion-margin-top ion-margin-bottom ion-text-center">
					<IonCol className="ion-align-items-center ion-margin-top ion-margin-bottom ion-padding-top">
						<IonNav color="secondary" className="textLink">
							Forgot password ?
						</IonNav>
					</IonCol>
				</IonRow>

			</IonGrid>
		</IonContent>

	</IonPage >
  );
};

const mapStateToProps = (state) => ({ authenticated: state.user.authenticated });

export default connect(mapStateToProps)(withRouter(Signup));