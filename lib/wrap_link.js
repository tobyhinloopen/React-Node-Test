document.addEventListener("click", function(e) {
  if(e.target.tagName == "A" || e.target.tagName == "BUTTON" || e.target.tagName == "INPUT")
    return;

  for(var wrapperElem = e.target, wrapLinkAttr;
    wrapperElem && wrapperElem.attributes && !(wrapLinkAttr = wrapperElem.attributes["data-wrap-link"]);
    wrapperElem = wrapperElem.parentNode);

  if(!wrapLinkAttr)
    return;

  var targetElementSelector = wrapLinkAttr.value == "true" ? "a" : wrapLinkAttr.value;
  var targetElement = wrapperElem.querySelector(targetElement);

  if(process.env.NODE_ENV == 'development')
    console.log(targetElementSelector, targetElement);

  if(!targetElement)
    return;

  e.preventDefault();

  var event = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
  var eventCancelled = !targetElement.dispatchEvent(event);

  if(eventCancelled || event.isDefaultPrevented())
    return;

  var href = targetElement.href;
  if(href)
    window.location.open(href);
});
