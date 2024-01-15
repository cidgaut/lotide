//requires assertEqual
//does the .. advise that the required file in in a previous folder?
const assertEqual = require('../assertEqual')
const head = require('../head');


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");