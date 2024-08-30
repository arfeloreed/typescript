// implicit types
let word = "Reed pogi";

console.log(word);

// explicit types
let first: string = "Hello world!";
let age: number = 30;

console.log(first);

// tuple 
type stringAndNumber = [string, number];

let x: stringAndNumber = ["Hello", 10];

// enums
enum Continents {
  North_America,
  South_America,
  Africa,
  Europe,
  Asia,
  Australia,
  Antartica
}

let region = Continents.Asia;

// interface
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "reed",
  id: 25,
}

// composing types -> Union
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;

const windowState: WindowStates = "minimized";
const lockState: LockStates = "locked";
const oddNumberUnderTen: OddNumberUnderTen = 9;

// example use of union
const getLength = (param: string | string[]): number => {
  return param.length;
}

getLength(["test", "test2"]);

