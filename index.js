import hello from '/first.js';
import world from '/second.js';
import exclaim from '/third.js';

(function() {
  let message = `${hello} ${world}${exclaim}`;
  console.log(message);
  let heading = document.createElement('h1');
  heading.textContent = message;
  document.body.append(heading);

})()