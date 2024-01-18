/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    return command =command.replaceAll('()', 'o').replaceAll('(al)', 'al')
    
};