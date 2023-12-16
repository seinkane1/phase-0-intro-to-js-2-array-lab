var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function appendCat(name) {
  return cats.concat(name); 
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function prependCat(name) {
  return [name, ...cats]; 
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function removeLastCat() {
  return cats.slice(0, -1); 
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function removeFirstCat() {
  return cats.slice(1); 
}

