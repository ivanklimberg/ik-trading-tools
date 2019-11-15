import { BASE_URL, getToken, getIolHttpHeaders } from './base';

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
    const response = await fetch(`${BASE_URL}/api/v2/operar/Comprar`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    })
    const json = await response.json();
    return json;
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
    const response = await fetch(`${BASE_URL}/api/v2/operar/Vender`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    })
    const json = await response.json();
    return json;
}

export default {
    postComprar,
    postVender
}