function fib() {
    var a = 0;
    var b = 1;
    function nacci() {
      nacci = a + b;
      a = b;
      b = nacci;
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"