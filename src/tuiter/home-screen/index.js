import React from "react";
import { FaBeer } from 'react-icons/fa';
import tuitsReducer from "../reducers/tuits-reducer";
import TuitsList from "../tuits";
import WhatsHappening from "../whats-happening";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore(
    {reducer: {tuits: tuitsReducer}});

function HomeScreen() {
    return (
        <Provider store={store}>
            <div>
                <h1>Home</h1>
                <WhatsHappening/>
                <TuitsList/>
            </div> 
        </Provider>

    );
   }
   export default HomeScreen;