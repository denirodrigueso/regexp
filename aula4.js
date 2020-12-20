// const { html } = require('./base');

// console.log(html);
// console.log(html.match(/<.+>.+<\/.+>/g));  // greedy
// console.log(html.match(/<.+?>.+?<\/.+?>/g));  // non-greedy

const texto =
  "In eu dolor nulla labore est dolor officia, In eu dolor nulla labore est dolor officia, In eu dolor nulla labore est dolor officia., In eu dolor nulla labore est dolor officia.";

const deniRegEx = /(labore)+ (est)+ (dolor)+ (officia)+/;
console.log(texto.match(deniRegEx));
console.log(deniRegEx.exec(texto));
