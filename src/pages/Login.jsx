import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
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


function Login({ dispatch, authenticated, history, ...props }) {
  console.log('Login', authenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => authenticated ? history.push('/tdr') : null);

  async function submitLogin(event) {
    event.preventDefault();
    const newUser = { email: email, password: password }
    // setloading
    // dispatch(loginUser(newUser));
    dispatch(loginUser(newUser, history));
  }

  return (
    <IonPage className="">
      <IonContent>euh
        <IonToolbar className="ion-no-padding">
          Logintest
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
              <IonButton onClick={event => submitLogin(event) }>
                Login
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

export default connect(mapStateToProps)(withRouter(Login));