import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from '../../redux/store';
import {getData} from "../../redux/filtered-data-reducer";


export const DataSettings: React.FC = () => {
    let newValue: any = React.createRef()

    const dispatch = useDispatch()
    const data = useSelector<AppRootState, any>(state => state.filteredDataReducer.data)
    //
    // useEffect(() => {
    //     dispatch(getData())
    // }, [])

    const onSetValue = () => {
        // let text = newValue.current.value
        // let maxValue = newSettingValue.current.value
        // if (text < 1000 && text >= 0) {
        //     dispatch(setStartValueAC(+text))
        // }
    }

    return (
        <div className="settings-wrapper">
            <div className={'input-wrapper'}>
                <div>
                    <span>enter value</span>
                    <div>
                        <input type="number"
                               onChange={onSetValue}
                               ref={newValue}
                               value={0}
                        />
                        <input type="checkbox"/>
                    </div>
                </div>
            </div>
            <div className={'buttons-wrapper'}>
                <Button title={'Filter By Length'}/>
                <Button title={"Filter By Substring"}/>
            </div>
        </div>
    );
}

