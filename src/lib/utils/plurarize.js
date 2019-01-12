module.exports = (word, qty) => {
  if (qty === 1)
    return `${qty} ${word}`;
  if (/^[aeiou]$/.test(word.substr(word.length - 1)))
    return `${qty} ${word}s`;
  return `${qty} ${word}es`;
}