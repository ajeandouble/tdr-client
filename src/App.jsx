import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Auth
import AuthRoute from './util/AuthRoute';
import jwtDecode from 'jwt-decode';

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED  } from './redux/types';

// Components
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Tdr from './pages/Tdr';

let authenticated = false;
const token = localStorage.FirebaseIdToken;
if (token) {
  console.log('euh')
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    if (!['/login', '/register'].includes(window.location.pathname))
      window.location.href = '/login';
      console.log('what');
    }
  else {
    store.dispatch({ type: SET_AUTHENTICATED })
    console.log('dispatch authenticated')
  }
}


function App() {
  return (
    <IonApp>
      <Provider store={store}>
        <Router>
          {/* <LastLocationProvider> */}
            <Route path="/home"><Home /></Route>
            <Route exact path="/signup"><Signup /></Route>
            <Route exact path="/login"><Login /></Route>

            <AuthRoute exact path="/tdr" component={Tdr} />
          {/* </LastLocationProvider> */}
        </Router>
      </Provider>
    </IonApp>
  );
}

export default App;
