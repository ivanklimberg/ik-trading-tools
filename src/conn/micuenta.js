import { BASE_URL, getToken, getIolHttpHeaders } from './base';

export const getPortafolio = async pais => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await fetch(`${BASE_URL}/api/v2/portafolio/${pais}`, {
        headers
    })
    const json = await response.json();
    return json;
}

export const getOperaciones = async numero => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    let numeroOperacion = '';
    if(numero) {
        numeroOperacion = `/${numero}`;
    }
    const response = await fetch(`${BASE_URL}/api/v2/operaciones${numeroOperacion}`, {
        headers
    });
    const json = await response.json();
    return json;
}

export const getOperacion = async numero => {
    return await getOperaciones(numero);
}

export const deleteOperacion = async numero => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await fetch(`${BASE_URL}/api/v2/operaciones/${numero}`, {
        method: 'DELETE',
        headers
    })
    const json = await response.json();
    return json;
}

export default {
    getPortafolio,
    getOperaciones,
    getOperacion,
    deleteOperacion
}