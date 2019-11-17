import { BASE_URL, getToken, getIolHttpHeaders } from './base';
import { post } from 'axios';

// t0 = Inmediato
// t1 = 24hs
// t2 = 48hs (o plazo normal) 
export const postComprar = async (mercado, simbolo, cantidad, precio, plazo, validez) => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const data = {
        mercado,
        simbolo,
        cantidad, 
        precio,
        plazo,
        validez
    }
    const response = await post(`${BASE_URL}/api/v2/operar/Comprar`, JSON.stringify(data), {
        headers
    })
    return response.data;
}

export const postVender = async (mercado, simbolo, cantidad, precio, plazo, validez) => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const data = {
        mercado,
        simbolo,
        cantidad,
        precio,
        plazo,
        validez
    }
    const response = await post(`${BASE_URL}/api/v2/operar/Vender`, JSON.stringify(data), {
        headers
    })
    return response.data;
}

export default {
    postComprar,
    postVender
}