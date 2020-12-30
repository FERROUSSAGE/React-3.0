import React from 'react';
import GlobalStyle from './components/Styled/GlobalStyle';

import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import ModalItem from './components/Modal/ModalItem'
import Order from './components/Order/Order';

import { useOpenItem } from "./components/Hooks/useOpenItem";
import { useOrders } from "./components/Hooks/useOrders";
import useAuth from './components/Hooks/useAuth';

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA5MaQ2KGHRzk0VFk3DKQu5s3uFwq66kOc",
    authDomain: "mrdonalds-62c05.firebaseapp.com",
    databaseURL: "https://mrdonalds-62c05-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mrdonalds-62c05",
    storageBucket: "mrdonalds-62c05.appspot.com",
    messagingSenderId: "201808386292",
    appId: "1:201808386292:web:84631a3c805ceaaff7a6a1"
};

firebase.initializeApp(firebaseConfig);

function App() {
    const auth = useAuth(firebase.auth);

    const openItem = useOpenItem();
    const orders = useOrders();

    return <>
        <GlobalStyle/>
        <NavBar {...auth}/>
        <Order { ...orders } {...openItem} {...auth}/>
        <Menu {...openItem}/>
        { openItem.openItem &&  <ModalItem {...openItem} { ...orders }/> }
    </>
}

export default App;
