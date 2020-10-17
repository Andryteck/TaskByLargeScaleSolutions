import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from '../../redux/store';
import {getData} from "../../redux/filtered-data-reducer";



type PropsType = {}

export const ShowValue: React.FC<PropsType> = () => {
    const dispatch = useDispatch()
    const data = useSelector<AppRootState, any>(state => state.filteredDataReducer.data)
    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div className="show-value-wrapper">
            <div>
                {data}
            </div>
        </div>
    );
}

