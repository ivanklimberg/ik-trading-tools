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
    if (price > 100) {
        const priceStrings = price.toFixed(1).split('.');
        const lastDigitRounded = Math.ceil(parseInt(priceStrings[1]) / 5) * 5;
        return `${priceStrings[0]}.${lastDigitRounded}`;
    } else if (precio > 50) {
        const finalPrice = price.toFixed(1);
        return finalPrice;
    }
    const priceStrings = price.toFixed(2).split('.');
    const lastDigitRounded = Math.ceil(parseInt(priceStrings[1]) / 5) * 5;
    return `${priceStrings[0]}.${lastDigitRounded}`;
    
}

export default {
    formatDate,
    addZeroIf2Digits,
    getHourSum,
    roundPrice
}