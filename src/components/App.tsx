import React, {useState, ChangeEvent, DetailedHTMLProps, ButtonHTMLAttributes} from 'react';
import '../App.css';
import {DataSettings} from "./DataSettings/DataSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../redux/store";
import {ShowValue} from "./ShowValue/ShowValue";


function App() {

    // const dispatch = useDispatch()
    // const counterValue = useSelector<AppRootState, CounterStateType>(state => state.counterSettings)


    return (
        <div className="App">
            <div className={'wrapper'}>
                <DataSettings/>
                <ShowValue/>
            </div>
        </div>
    );
}

export default App;
