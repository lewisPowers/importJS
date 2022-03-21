export default (function() {
  return hi();
})()

function hi() {
  let greetings = [
    'Hi, ',
    'Hello, ',
    'Howdy, ',
    'Hi There, ',
    'Why Hello, ',
    'Well Hello There, ',
    'Salutations, ',
    'Greetings, ',
  ]
  let randomIdx = Math.round(Math.random() * (greetings.length - 1) );
  return greetings[randomIdx];
}