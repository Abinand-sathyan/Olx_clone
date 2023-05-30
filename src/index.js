import React from 'react';
import ReactDOM from 'react-dom';
import {FirebaseContext} from './Store/FirebaseContext'
import Context from './Store/FirebaseContext'
import firebase from "./Firebase/config"
import App from './App';

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <Context>
       <App />
   </Context>
</FirebaseContext.Provider>
, document.getElementById('root'));

