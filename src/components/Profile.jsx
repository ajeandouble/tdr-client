import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { connect, useDispatch, useSelector } from 'react-redux';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonText, IonButton, IonInput, IonAvatar } from '@ionic/react';

function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user);

    const  capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)
    return (
        <IonGrid className="ion-margin">
            <IonRow className="">
                <IonCol size="2">
                    <IonAvatar>
                        <img src={profile.profilePic} />
                    </IonAvatar>
                </IonCol>
                <IonCol size="1"/>
                <IonCol size="6" >
                    <h1>
                        <b>{capitalizeFirstLetter(profile.firstName)}</b>
                        &nbsp;{capitalizeFirstLetter(profile.lastName)}
                    </h1>
                </IonCol>
            </IonRow>
            <IonRow className="ion-margin-top">
                <h2>Bio:</h2>
                <br></br>
                <span>{profile.bio}</span>
            </IonRow>
            <IonRow className="ion-margin-top">
                Test
            </IonRow>
        </IonGrid>
    );
}

export default Profile;