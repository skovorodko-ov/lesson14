'use strict';

const input = document.querySelector('#input'),
      p = document.querySelector('#p');

function debounce(f, t) {
      return function foo () {
        let previousCall = foo.lastCall;
        foo.lastCall = Date.now();
        if (previousCall && ((foo.lastCall - previousCall) <= t)) {
          clearTimeout(foo.lastCallTimer);
        }
        foo.lastCallTimer = setTimeout(() => f(), t);
      };
}

let logger = () => p.innerText = input.value;

let debouncedLogger = debounce(logger, 300);

input.addEventListener('input', () => debouncedLogger());
