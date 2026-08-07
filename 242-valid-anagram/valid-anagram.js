/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let hashMap = {};
    for (let char of s) {
        if (hashMap[char]) {
            hashMap[char]++;
        } else {
            hashMap[char] = 1
        }
    }

    for (let char of t) {
        if (!hashMap[char]) {
            return false;
        }
        hashMap[char]--
    }
    return true;
};