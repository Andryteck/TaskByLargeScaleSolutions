import React from 'react';
import {useSelector} from "react-redux";
import {AppRootState} from '../../redux/store';


type PropsType = {}

export const ShowValue: React.FC<PropsType> = () => {
    const data = useSelector<AppRootState, any>(state => state.filteredDataReducer.data)

    return (
        <div className="show-value-wrapper">
            <div>
                {data.map((i: string, index: number) => <ul>
                    <li key={index}>{i}</li>
                </ul>)}
            </div>
        </div>
    );
}

