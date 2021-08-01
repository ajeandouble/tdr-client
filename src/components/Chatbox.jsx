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
  IonInput,
} from '@ionic/react';
import { getMatches } from '../redux/actions/userActions';
import { sendMessage, getMessages } from '../redux/actions/messagesAction';
import '../theme/Chat.css';

function ChatBox({ match, setShowChatBox }) {
  const dispatch = useDispatch();
  const messagesSelector = useSelector((state) => state.messages.messages);
  const userSelector = useSelector((state) => state.user.userId);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    console.log('submit', inputValue, match.userId);
    dispatch(sendMessage({ msg: inputValue, to: match.userId }));
  };

  useEffect(() => {
    console.log(ChatBox.name);
    console.log(messagesSelector);
  }, []);

  return (
    <IonPage>
      <span>CHATBOX {match.userId}</span>
      <span onClick={() => setShowChatBox(false)} style={{ color: 'black' }}>
        CLOSE{match.userId}
      </span>
      {messagesSelector
        .filter((msg) => msg.from === match.userId || msg.from === userSelector)
        .map((msg) => (
          <span style={{ color: 'black' }}>{msg.msg}</span>
        ))}
      <img src={match.profilePic} />
      <IonInput
        style={{ color: 'black' }}
        value={inputValue}
        onInput={e => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handleSubmit();
        }}
      />
    </IonPage>
  );
}

export default ChatBox;
