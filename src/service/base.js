import axios from 'axios'

const  ERR_OK = 0
const baseURL = '/'

axios.defaults.baseURL = baseURL
//标准的结果进行封装
export function get(url, params) {
    return axios.get(url, {
        params
    }).then((res) => {
        const serverData = res.data
        if (serverData.code === ERR_OK) {
            return serverData.result
        }
    }).catch((e) => {
        console.log(e);
    })
}