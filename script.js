'use strick';

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.creatorElem = function() {
  let tag;

  const thisHeigth = this.height,
    thisWeidth = this.width,
    thisBg = this.bg,
    thisFontSize = this.fontSize;

  let creatingStyle = function() {

    tag.style.cssText = 'height: ' + thisHeigth + 'px; ' + 
      'width: ' + thisWeidth + 'px; ' + 
      'background-color: ' + thisBg + '; ' +
      'font-size: ' + thisFontSize + 'px;';
  };

  console.log(this.selector.slice(1));

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
  tag.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  creatingStyle();
};

const domElement = new DomElement('.ooo', 300, 500, 'red', 20);
console.log(domElement.height);

domElement.creatorElem();