import axios from "axios";


const instance = axios.create({
        baseURL: 'https://api.codetabs.com/v1/proxy?quest=http://www.mrsoft.by/'
    }
)

export const valueAPI = {
    getData() {
        return instance.get<DataType>('data.json')
    }
}


//types

export type DataType = {
    data: Array<string>
}

