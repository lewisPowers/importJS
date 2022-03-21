export default (function() {
  return zeroThree() === 0 ? '' : zeroThree() === 1 ? '!' : zeroThree() === 2 ? '!!' : zeroThree() === 3 ? '!!!' : '🌎';
})()

function zeroThree() {
  return Math.round(Math.random() * 3)
}