var assert = require('assert');    

function add (a, b) {    
  return a + b;    
}    
var expected = add(1,2);    
assert( expected === 2, 'one plus two is three');     // gives response
assert( expected === 3, 'one plus two is three');     // not gives response