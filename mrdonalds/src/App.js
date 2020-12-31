import React from 'react';
import GlobalStyle from './components/Styled/GlobalStyle';

import NavBar from './components/NavBar/NavBar';
import Menu from './components/Menu/Menu';
import ModalItem from './components/Modal/ModalItem'
import Order from './components/Order/Order';
import OrderConfirm from './components/Order/OrderConfirm';

import { useOpenItem } from "./components/Hooks/useOpenItem";
import { useOrders } from "./components/Hooks/useOrders";
import useAuth from './components/Hooks/useAuth';
import useTitle from './components/Hooks/useTitle';
import useFetch from './components/Hooks/useFetch';
import useOrderConfirm from './components/Hooks/useOrderConfirm';

import { Context } from './components/Context/context';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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
    const database = firebase.database();

    const openItem = useOpenItem();
    const orders = useOrders();
    const orderConfirm = useOrderConfirm();
    const dbMenu = useFetch(database);
    
    useTitle(openItem.openItem);

    return (
        <Context.Provider value={{ auth, openItem, dbMenu: dbMenu, orders, orderConfirm, database: database}}>
            <GlobalStyle/>
            <NavBar/>
            <Order />
            <Menu />
            { openItem.openItem &&  <ModalItem/> }
            {orderConfirm.openOrderConfirm && <OrderConfirm />}
        </Context.Provider>
    );
}

export default App;
