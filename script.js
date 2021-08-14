'use strick';

const DomElement = function(selector, height, width, bg, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.position = position;
};

DomElement.prototype.creatorElem = function() {
  let tag;
  const thisHeigth = this.height,
    thisWeidth = this.width,
    thisBg = this.bg,
    thisPosition = this.position;

  let creatingStyle = function() {
    tag.style.cssText = 'height: ' + thisHeigth + 'px; ' + 
      'width: ' + thisWeidth + 'px; ' + 
      'background-color: ' + thisBg + '; ' +
      'position: ' + thisPosition + ';';
  };

  if (this.selector.slice(0, 1) === '.') {
    tag = document.createElement('div');
    tag.className = this.selector.slice(1);
    document.body.append(tag);
  }
  if (this.selector.slice(0, 1) === '#') {
    tag = document.createElement('p');
    tag.setAttribute('id', this.selector.slice(1));
    document.body.append(tag);
  }

  creatingStyle();
};

const domElement = new DomElement('.block', 100, 100, 'red', 'absolute');

document.addEventListener('DOMContentLoaded', domElement.creatorElem());

let step = function(top, left) {
  const elem = document.querySelector('.block');
  elem.style.top = top + 'px';
  elem.style.left = left + 'px';
};

  let a = 0,
    b = 0;

document.addEventListener('keydown', function(event) {

  if (event.keyCode === 40) {a += 10;}
  if (event.keyCode === 38) {a -=10;}
  if (event.keyCode === 39) {b += 10;}
  if (event.keyCode === 37) {b -= 10;}

  step(a, b);
});