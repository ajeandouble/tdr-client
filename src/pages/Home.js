
import React, { useState } from 'react';

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
	IonColu
} from '@ionic/react';

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

function Home() {
    const [text, setText] = useState("");
    const [number, setNumber] = useState(0);
  
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
        <IonTitle>Tdr-like</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
    </IonContent>
  </IonPage>
  );
};

export default Home;