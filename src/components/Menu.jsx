import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { IonPage,
    IonHeader,
		IonContent,
    IonFooter,
		IonRow,
    IonCol,
		IonBadge,
		IonMenu,
		IonList,
		IonToolbar,
		IonButton,
		IonTabs,
		IonTabBar,
		IonTabButton,
		IonLabel,
		IonIcon,
		IonTitle,
		IonItem,
    IonMenuButton,
    IonMenuToggle,
    IonAvatar,
		} from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { connect, useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../redux/actions/userActions';
import appRoutes from '../helper/appRoutes';

function Menu() {
	const dispatch = useDispatch();
	const profile = useSelector(state => state.user)

  return (
    <>
      <IonMenu side="start" menuId="first" contentID="main">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
            <IonAvatar><img src={profile.profilePic} /></IonAvatar>
            <IonButton slot="start" />
          </IonToolbar>
        </IonHeader>
        <IonContent id="content">
          <IonCol size="2">
          <IonList>
          </IonList>
          </IonCol>
        </IonContent>
      </IonMenu>
    </>
  );
}

export default withRouter(Menu);
