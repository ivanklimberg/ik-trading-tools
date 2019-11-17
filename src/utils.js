export const formatDate = date => {
    const day = date.getDate();
    const monthIndex = date.getMonth() + 1;
    const dayString = addZeroIf2Digits(day);
    const monthString = addZeroIf2Digits(monthIndex);
    const year = date.getFullYear();
    return year + '-' + monthString + '-' + dayString;
}

export const addZeroIf2Digits = number => {
    let numberString = number.toString();
    if (number < 10)
        numberString = '0' + numberString;
    return numberString;
}

export const getHourSum = () => {
    const hora = (new Date()).getHours();
    const minutos = (new Date()).getMinutes();
    return parseInt(hora + addZeroIf2Digits(minutos));
}

export const roundPrice = price => {
    if (precio > 100) {
        const precioStrings = precio.toFixed(1).split('.');
        const lastDigitRounded = Math.ceil(parseInt(precioStrings[1]) / 5) * 5;
        return `${precioStrings[0]}.${lastDigitRounded}`;
    } else if (precio > 50) {
        const precioFinal = precio.toFixed(1);
        return precioFinal;
    } else {
        const precioStrings = precio.toFixed(2).split('.');
        const lastDigitRounded = Math.ceil(parseInt(precioStrings[1]) / 5) * 5;
        return `${precioStrings[0]}.${lastDigitRounded}`;
    }
}