import qs from 'qs';
import { post } from 'axios';
export const BASE_URL = 'https://api.invertironline.com'

const tokenTimeout = 120000;
var token
export const getToken = async (username, password) => {
    let callToken = !token;
    if (token) {
        //Cheque que el token no este por expirar. 
        const dateExpiry = new Date(token['.expires']);
        const dateNow = new Date();
        callToken = (dateExpiry - dateNow) < tokenTimeout;
    }
    if (callToken) {
        let data = {}
        if (username && password)
            data = {
                username: username,
                password: password,
                grant_type: 'password'
            }
        else
            data = {
                refresh_token: token.refresh_token,
                grant_type: 'refresh_token'
            }

        const response = await post(`${BASE_URL}/token`, qs.stringify(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        const json = response.data;
        token = json;
    }

    return token;
}

export const getIolHttpHeaders = token => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.access_token}`
    }
}

export default {
    getIolHttpHeaders,
    getToken,
    BASE_URL
}