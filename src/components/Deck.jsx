import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonIcon,
  IonContent,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonTitle,
  IonText,
} from '@ionic/react';
import { thumbsUpOutline, thumbsDownOutline } from 'ionicons/icons';

import {
  getDeck,
  sendLike,
  sendDislike,
  getMatches,
} from '../redux/actions/userActions';
import '../theme/deck.css';

function Deck() {
  const dispatch = useDispatch();
  const deckSelector = useSelector((state) => state.user.deck);

  function handleLike(id) {
    console.log(id);
    dispatch(sendLike({ userId: id }));
  }

  function handleDislike(id) {
    console.log(id);
    //sendDislike dispatch
  }

  useEffect(() => {
    dispatch(getDeck());
  }, []);

  return (
    <>
      <span>deckSelector</span>
      {deckSelector && deckSelector[0] && deckSelector[0].profilePic ? (
        <IonCard className={'ion-no-padding'}>
          <IonCardHeader>
            <IonCardTitle
              style={{
                margin: '0.5rem 0 0 0.5rem',
                position: 'absolute',
                color: 'white',
                zIndex: '10',
              }}
            >
              Test
            </IonCardTitle>
            {/* <IonCardSubtitle>Test</IonCardSubtitle> */}
            <IonImg src={deckSelector[0].profilePic}></IonImg>
          </IonCardHeader>
          <IonCardContent width={{}}>
            <IonText>
              {deckSelector[0].bio}
              {deckSelector[0].userId}
            </IonText>
            <div className="card-footer">
              <IonRow style={{ color: 'black' }}>
                <IonCol size="4">
                  <IonButton
                    style={{ color: 'black' }}
                    className="fill"
                    fill="clear"
                    onClick={() => handleDislike(deckSelector[0].userId)}
                  >
                    <IonIcon
                      icon={thumbsDownOutline}
                      className="card--footer--thumbs"
                    />
                  </IonButton>
                </IonCol>
                <IonCol size="4" />
                <IonCol size="4" style={{ textAlign: 'right' }}>
                  <IonButton
                    style={{ color: 'black' }}
                    className="fill"
                    fill="clear"
                    onClick={() => handleLike(deckSelector[0].userId)}
                  >
                    <IonIcon
                      icon={thumbsUpOutline}
                      className="card--footer--thumbs card-footer--thumbs__right"
                    />
                  </IonButton>
                </IonCol>
              </IonRow>
            </div>
          </IonCardContent>
          <IonCard slot="bottom">Test</IonCard>
        </IonCard>
      ) : (
        <IonCard>
          <IonCardHeader>
            <IonImg src={''}></IonImg>
          </IonCardHeader>
          <IonCardContent>
            <IonText>Fuck</IonText>
          </IonCardContent>
        </IonCard>
      )}
    </>
  );
}

export default Deck;
