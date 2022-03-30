export default (function() {
  return `${word()} World`;
})()

function word() {
  let words = [
    'FREAKIN',
    'Amazing',
    'Great',
    '',
    'Bright',
    'Sweet',
    'Round',
    '',
    '',
    'Blue',
    'Wonderful',
    'dang-ol',
    'Beautiful',
    '',
    'Massive',
    'Impressive',
    ''
  ];
  let randomIdx = Math.floor(Math.random() * (words.length - 1) );
  window.wordIndex = randomIdx;
  return words[randomIdx];
}