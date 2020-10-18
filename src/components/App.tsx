import React, {useState, ChangeEvent, DetailedHTMLProps, ButtonHTMLAttributes} from 'react';
import '../App.css';
import {DataSettings} from "./DataSettings/DataSettings";
import {ShowValue} from "./ShowValue/ShowValue";


function App() {

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
