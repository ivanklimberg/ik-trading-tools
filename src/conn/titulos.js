import { BASE_URL, getToken, getIolHttpHeaders } from './base';
import { get } from 'axios';

export const getTitulo = async (simbolo, mercado) => {
    if (!mercado) mercado = 'bcba';
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await get(`${BASE_URL}/api/v2/${mercado}/Titulos/${simbolo}`, {
        headers
    })
    return response.data;
}

export const getCotizacion =  async (simbolo, mercado) => {
    if (!mercado) mercado = 'bcba';
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await get(`${BASE_URL}/api/v2/${mercado}/Titulos/${simbolo}/cotizacion`, {
        headers
    })
    return response.data;
}

export const getCotizacionHistorica = async (simbolo, fechaDesde, fechaHasta, ajustada, mercado)  => {
    if (!mercado) mercado = 'bcba';
    let ajustadaString = '';
    if(ajustada)
        ajustadaString = 'ajustada';
    else
        ajustadaString = 'sinAjustar';
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await get(`${BASE_URL}/api/v2/${mercado}/Titulos/${simbolo}/cotizacion/seriehistorica/${fechaDesde}/${fechaHasta}/${ajustadaString}`, {
        headers
    })
    return response.data;
}

export const getPanelCotizacion = async (instrumento, panel, pais) => {
    if(!pais) pais = 'argentina';
    const token = await getToken();
    const headers = getIolHttpHeaders(token);
    const response = await get(`${BASE_URL}/api/v2/cotizaciones/${instrumento}/${panel}/${pais}`, {
        headers
    })
    return response.data;   
}

export default {
    getPanelCotizacion,
    getCotizacionHistorica,
    getCotizacion,
    getTitulo
}