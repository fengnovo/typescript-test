import axios from 'axios'

export function fetchData() {
    return axios('https://cnodejs.org/api/v1/topics', {
        params: {
            limit: 10
        }
    });
}