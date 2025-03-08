/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    function backtrack(s, openCount, closeCount) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        if (openCount < n) {
            backtrack(s + "(", openCount + 1, closeCount);
        }

        if (closeCount < openCount) {
            backtrack(s + ")", openCount, closeCount + 1);
        }
    }

    let result = [];
    backtrack("", 0, 0);
    return result;
};