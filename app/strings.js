stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    if (amount === 1) {
      return [...new Set(str)].join('');
    }
    const listStr = [...str];
    const newStr = [];
    const countCharacter =
    (character, list) => list.filter(value => value === character).length;
    let index = 0;
    while (index < listStr.length - 1) {
      const value = listStr[index];
      index += 1;
      if (countCharacter(value, listStr) === 1) {
        newStr.push(value);
        continue;
      }
      if (countCharacter(value, newStr) < amount) {
        newStr.push(value);
        continue;
      }
      if (value !== listStr[index - 3] && countCharacter(value, newStr) >= amount) {
        newStr.push(value);
        continue;
      }
    }
    return newStr.join('');
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return str.split('').reverse().join('');
  },
};
