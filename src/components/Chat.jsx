import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IonPage,
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
  IonModal,
} from '@ionic/react';
import { getMatches } from '../redux/actions/userActions';
import { sendMessage, getMessages } from '../redux/actions/messagesAction';
import ChatBox from './Chatbox';
import '../theme/Chat.css';

function Chat() {
  const dispatch = useDispatch();
  const matchesSelector = useSelector((state) => state.user.matches);
  const currentUserIdSelector = useSelector((state) => state.user.userId);
  const messagesSelector = useSelector((state) => state.messages.messages);
  const [showChatBox, setShowChatBox] = useState(false);
  const [chatBoxUser, setChatBoxUser] = useState(undefined);

  useEffect(() => {
    dispatch(getMatches());
    dispatch(getMessages());
  }, []);

  useEffect(() => {
    console.log('update', matchesSelector);
  }, [dispatch, matchesSelector]);

  useEffect(() => {
    console.log('messages', messagesSelector);
  }, [dispatch, messagesSelector]);

  return (
    <IonContent>
      {showChatBox ? (
        <IonModal isOpen={true}>
        <ChatBox match={chatBoxUser} setShowChatBox={setShowChatBox} style={{color: 'black'}}/>
          Test
        </IonModal>
      ) : (
        <>
          {matchesSelector.map((match) => (
            <IonRow>
              <IonCol>
                <span>yo{match.userId}</span>
                <IonButton
                  onClick={() => {
                    setShowChatBox(true);
                    setChatBoxUser(match);
                  }}
                >
                  {match.firstName}
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </>
      )}
    </IonContent>
  );
}

export default Chat;

//<IonButton onClick={() => handleSubmit('test', match.userId)}>
// {match.firstName}
// </IonButton>
