import { BASE_URL, getToken, getIolHttpHeaders } from './base';
import axios from 'axios';

export const getPortafolio = async pais => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await axios.get(`${BASE_URL}/api/v2/portafolio/${pais}`, {
        headers
    })
    return response.data;
}

export const getOperaciones = async numero => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    let numeroOperacion = '';
    if(numero) {
        numeroOperacion = `/${numero}`;
    }
    const response = await axios.get(`${BASE_URL}/api/v2/operaciones${numeroOperacion}`, {
        headers
    });
    return response.data;
}

export const getOperacion = async numero => {
    return await getOperaciones(numero);
}

export const deleteOperacion = async numero => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await axios.delete(`${BASE_URL}/api/v2/operaciones/${numero}`, {
        headers
    })
    return response.data;
}

export const getEstadoCuenta = async () => {
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await axios.get(`${BASE_URL}/api/v2/estadocuenta`, {
        headers
    });
    return response.data;
}

export default {
    getPortafolio,
    getEstadoCuenta,
    getOperaciones,
    getOperacion,
    deleteOperacion
}