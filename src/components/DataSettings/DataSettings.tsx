import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {filterDataByLength, filterDataBySubstring, getData} from "../../redux/filtered-data-reducer";
import {AppRootState} from "../../redux/store";


export const DataSettings: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const isChecked = useSelector<AppRootState, boolean>(state => state.filteredDataReducer.isChecked)
    const [checked, setIsChecked] = useState<boolean>(isChecked)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getData())
    }, [])


    const FilterValueByLength = () => {
        dispatch(filterDataByLength(+value))
        // setValue('')
    }
    const FilterValueBySubstring = () => {
        // if () {
        dispatch(filterDataBySubstring(value))
        setValue('')
    }

    // }

    return (
        <div className="settings-wrapper">
            <div className={'input-wrapper'}>
                <div>
                    <span>enter value</span>
                    <div>
                        <input onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                               value={value}
                               className={'value-input'}
                        />
                        <input type="checkbox" className={'checkbox-input'} checked={checked}
                               onChange={() => setIsChecked(!checked)}/>
                    </div>
                </div>
            </div>
            <div className={'buttons-wrapper'}>
                <Button title={'Filter By Length'} onClick={FilterValueByLength}/>
                <Button title={"Filter By Substring"} onClick={FilterValueBySubstring}/>
            </div>
        </div>
    );
}

