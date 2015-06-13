if(!Array.prototype.flatten) {
  Object.defineProperty(Array.prototype, 'flatten', {
    enumerable: false,
    value: function() {
      var arr = [];
      for(let e of this) {
        if(e instanceof Array)
          arr.push(...e.flatten());
        else
          arr.push(e);
      }
      return arr;
    }
  })
}

if(!Array.prototype.unique) {
  Object.defineProperty(Array.prototype, 'unique', {
    enumerable: false,
    value: function() {
      var arr = [];
      for(let e of this)
        if(arr.indexOf(e) == -1)
          arr.push(e);
      return arr;
    }
  })
}

