import {valueAPI, DataType} from "../api/value";
import {Dispatch} from "react";
import {AnyAction} from "redux";

export const SET_VALUE = 'SET_VALUE'
export const FILTER_VALUE_BY_LENGTH = 'FILTER_VALUE_BY_LENGTH'
export const FILTER_VALUE_BY_SUBSTRING = 'FILTER_VALUE_BY_SUBSTRING'
export const SET_IS_CHECKED = 'SET_IS_CHECKED'

type initialStateType = {
    data: Array<string>,
    isChecked: boolean,
    inputValue: number
}

const initialState: initialStateType = {
    data: [],
    isChecked: false,
    inputValue: 0
}


export const filteredDataReducer = (state: initialStateType = initialState, {type, payload = null}: AnyAction): initialStateType => {
    switch (type) {
        case SET_VALUE :
            return {
                ...state,
                data: payload.data
            }
        case FILTER_VALUE_BY_LENGTH :
            return {
                ...state,
                data: state.data.filter(i => i.length > payload.value),
                inputValue: payload.value
            }
        case FILTER_VALUE_BY_SUBSTRING :
            debugger
            return {
                ...state,
                data: state.data.filter(i => state.isChecked ? i.search(payload.value) !== -1 : i.toUpperCase().search(payload.value.toUpperCase()) !== -1)
            }
        case SET_IS_CHECKED :
            return {
                ...state,
                isChecked: !state.isChecked
            }
        default:
            return state
    }
}

export const getData = (): any => async (dispatch: Dispatch<any>): Promise<void> => {
    try {
        const response = await valueAPI.getData()

        // @ts-ignore
        dispatch(setData(response.data.data))
    } catch (e) {
        console.log(e)

    }
}
export const setData = (data: DataType): any => async (dispatch: Dispatch<{}>): Promise<void> => {
    dispatch({
        type: SET_VALUE,
        payload: {
            data
        }
    })
}

export const filterDataByLength = (value: number): any => async (dispatch: Dispatch<{}>): Promise<void> => {
    dispatch({
        type: FILTER_VALUE_BY_LENGTH,
        payload: {
            value
        }
    })
}

export const filterDataBySubstring = (value: string): any => async (dispatch: Dispatch<{}>): Promise<void> => {
    dispatch({
        type: FILTER_VALUE_BY_SUBSTRING,
        payload: {
            value
        }
    })
}
export const setIsChecked = (): any => async (dispatch: Dispatch<{}>): Promise<void> => {
    dispatch({
        type: SET_IS_CHECKED,
    })
}


