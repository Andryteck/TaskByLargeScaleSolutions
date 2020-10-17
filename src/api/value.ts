import axios from "axios";


const instance = axios.create({
        baseURL: 'https://www.mrsoft.by'
    }
)

export const valueAPI = {
    getData() {
        return instance.get<ValueType>('/data.json')
    }
}


//types

export type ValueType = {
    data: []
}
