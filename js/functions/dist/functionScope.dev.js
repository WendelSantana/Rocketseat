"use strict";

// function scope
var subject = 'create video';

function createThink() {
  subject = 'study';
  return subject;
}

console.log(createThink(subject));
console.log(subject);