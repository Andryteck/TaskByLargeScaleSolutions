import {valueAPI, ValueType} from "../api/value";
import {Dispatch} from "react";
import {AnyAction} from "redux";

export const SET_VALUE = 'SET_VALUE'

const initialState: ValueType = {
    data: []
}


export const filteredDataReducer = (state: ValueType = initialState, {type, payload = null}: AnyAction): ValueType => {
    switch (type) {
        case "SET_VALUE" :
            return {
                ...state,
                data: payload.data
            }

        default:
            return state
    }
}

export const getData = (): any => async (dispatch: Dispatch<any>): Promise<void> => {
    try {

        const response = await valueAPI.getData()

        dispatch(setData(response.data))
    } catch (e) {
        // message.error(e.message);

    }
}
export const setData = (data: ValueType): any => async (dispatch: Dispatch<{}>): Promise<void> => {
    dispatch({
        type: SET_VALUE,
        payload: {
            data
        }
    })
}


