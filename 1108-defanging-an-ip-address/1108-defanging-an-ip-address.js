/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    address = address.replaceAll('.', '[.]')
    return address
};