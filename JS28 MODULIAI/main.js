import { multiplication } from "./multi.js";
import { headerFn } from "./header.js";
import { carsFn } from "./cars.js";

const result = multiplication(3, 4);
console.log(result);

const body = document.querySelector("body");

headerFn(body);
carsFn(body);
