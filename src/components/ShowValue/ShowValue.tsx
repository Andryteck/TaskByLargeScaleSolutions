import React from 'react';
import {useSelector} from "react-redux";
import {AppRootState} from '../../redux/store';


export const ShowValue: React.FC = () => {
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

