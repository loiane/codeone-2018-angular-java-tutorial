// Yes
let myString = 1;

// No!!!
let myString2: string = 'Code One';

interface Person {
  name: string;
  age: number;
}

interface Contact extends Person {
    phone: string;
}

function orderByName(a: Person[]): Person[] {
  let result = a.slice(0);
  if (result.length === 0 ) {
    console.log();
  } else {
    return 'string';
  }
  return result.sort((x, y) => x.name.localeCompare(y.name));
}

let mary: Person = { name: 'Mary', age: 20 };
let john = { name: 'John', age: 21, phone: '34533545' };

orderByName([mary, john]);