var fontResizeToFitTimeout;

function throttledFontResizeToFitAll() {
  if(fontResizeToFitTimeout)
    clearTimeout(fontResizeToFitTimeout);
  fontResizeToFitTimeout = setTimeout(function() {
    fontResizeToFitTimeout = null;
    fontResizeToFitAll(document.querySelectorAll("[data-font-resize-to-fit]"));
  });
}

function fontResizeToFitElement(element) {
  var ROUNDING_TOLERANCE = 0;
  var elementStyle = getComputedStyle(element);
  // Elements having padding won't 'overflow' the outer box of the element, but will overflow their
  // padding. Since we can't measure content-width that doesn't overflow the element box, we need
  // to wrap the content in another element that does not have padding.
  if(parseInt(elementStyle.paddingLeft) > 0 || parseInt(elementStyle.paddingRight) > 0) {
    console.warn("Can't fontResizeToFitElement on elements with horizontal padding.", element);
    return;
  }
  // We need to check if the element content is larger than the element box.
  // Additionally, we check if the font-size has been fixed before in case the element has become
  // larger.
  else if(element.style.fontSize != "" || element.offsetWidth < element.scrollWidth) {
    // reset element font size to 'default'
    element.style.fontSize = "";
    var lineHeight = elementStyle.lineHeight;
    var originFontSize = parseInt(elementStyle.fontSize);
    var newScale = element.offsetWidth / element.scrollWidth;
    element.style.lineHeight = lineHeight;
    element.style.fontSize = newScale > 0.99 ? "" : "" + Math.floor(originFontSize * newScale + ROUNDING_TOLERANCE) + "px";
  }
}

function fontResizeToFitAll(elements) {
  for(var i=0; i<elements.length; ++i)
    fontResizeToFitElement(elements[i]);
}

document.addEventListener("DOMContentLoaded", function() {
  fontResizeToFitAll(document.querySelectorAll("[data-font-resize-to-fit]"));
});

window.addEventListener("resize", throttledFontResizeToFitAll);
