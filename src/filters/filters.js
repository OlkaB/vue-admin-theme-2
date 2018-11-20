import Vue from "vue"

/** ----- FILTERS LIST -----
 *
 * -- STRING
 * uppercase
 * lowercase
 * titlecase
 *
 * -- NUMBER
 * price
 * number
 * decimal
 * percent
 *
 * -- ARRAY
 * sortArray of string or numbers
 * slice
 *
 * -- OBJECT
 * JSONencode and JSONdecode
 *
 */


Vue.filter("price", (number, currency) => {
    if(typeof number !== "number" || typeof currency !== "string") {
        return number;
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(/\./, ',') + ' ' + currency;
});

Vue.filter("number", number => {
    if(typeof number !== "number") {
        return number;
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(/\./, ',');
});

Vue.filter("sortArray", (array, arrayType) => {
    /**
     * @arrayType: ['string', 'number']
     */

    if(!Array.isArray(array)) {
        return array;
    }

    //if no array type is defined or is array of strings, use simple sort
    if(!arrayType || arrayType === 'string') {
        return array.sort();
    }

    //if array of numbers compare elements to sort
    if(arrayType && arrayType === 'number') {
        return array.sort(function(a, b){return a - b});
    }

});

Vue.filter("JSONencode", object => {
    return JSON.stringify(object);
});

Vue.filter("JSONdecode", json => {
    return JSON.parse(json);
});

Vue.filter("decimal", (number, decimalPlaces, decimalSeparator) => {
    if(typeof number !== "number") {
        return number;
    }

    //set default options
    let separator = decimalSeparator ? decimalSeparator : ',';
    let places = decimalPlaces ? decimalPlaces : 0;

    return number.toFixed(places).replace('.', separator);
});

Vue.filter("percent", (number, decimalPlaces, decimalSeparator, usePercentSign) => {
    /**
     * @decimalPlaces: number
     * @decimalSeparator: string
     * @usePercentSign: boolean
     */

    if(typeof number !== "number") {
        return number;
    }

    //set default options
    let separator = decimalSeparator ? decimalSeparator : ',';
    let places = decimalPlaces ? decimalPlaces : 0;
    let percentSign = usePercentSign ? ' %' : '';

    return (number * 100).toFixed(places).replace('.', separator) + percentSign;
});

Vue.filter("slice", (array, sliceTo, sliceFrom) => {
    if(!Array.isArray(array) || !sliceTo) {
        return array;
    }

    let from = sliceFrom ? sliceFrom : 0;
    let to = sliceTo;

    return array.slice(from, to);
});

Vue.filter("uppercase", string => {
    if(typeof string !== "string") {
        return string;
    }

    return string.toUpperCase();
});

Vue.filter("lowercase", string => {
    if(typeof string !== "string") {
        return string;
    }

    return string.toLowerCase();
});

Vue.filter("titlecase", string => {
    if(typeof string !== "string") {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


});
