export default (function() {
  let randomNum = zeroThree();
  return randomNum === 0 ? '' :
  randomNum === 1 ? '!' :
  randomNum === 2 ? '!!' :
  randomNum === 3 ? '!!!' :
  '🌎';
})()

function zeroThree() {
  return Math.round(Math.random() * 3)
}