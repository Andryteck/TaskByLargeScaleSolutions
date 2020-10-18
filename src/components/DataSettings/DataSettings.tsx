import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {filterDataByLength, filterDataBySubstring, getData, setIsChecked} from "../../redux/filtered-data-reducer";
import {AppRootState} from "../../redux/store";


export const DataSettings: React.FC = () => {
    const [value, setValue] = useState<string>('')
    const isChecked = useSelector<AppRootState, boolean>(state => state.filteredDataReducer.isChecked)
    const inputValue = useSelector<AppRootState, number>(state => state.filteredDataReducer.inputValue)

    const dispatch = useDispatch()

    const handleChecked = () => {
        dispatch(setIsChecked())
    }

    useEffect(() => {
        dispatch(getData())
    }, [])


    const FilterValueByLength = () => {
        dispatch(filterDataByLength(+value))
        setValue('')
    }
    const FilterValueBySubstring = () => {
        dispatch(filterDataBySubstring(value))
        setValue('')
    }

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
                        <input type="checkbox" className={'checkbox-input'} checked={isChecked}
                               onChange={handleChecked}/>
                    </div>
                    {
                        inputValue > 25 ? <p className="error">В массиве отстутствуют строки длинною больше чем &nbsp;
                            {inputValue} символа(ов). Введите меньшее число</p> : null
                    }
                </div>
            </div>
            <div className={'buttons-wrapper'}>
                <Button title={'Filter By Length'} onClick={FilterValueByLength}/>
                <Button title={"Filter By Substring"} onClick={FilterValueBySubstring}/>
            </div>
        </div>
    );
}

