const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var new_kitties = [...kittens, name];
  return new_kitties;
}

function prependKitten(name) {
  var new_kitty = [name, ...kittens];
  return new_kitty;
}

function removeLastKitten() {
  var new_array = kittens.slice(0, kittens.length - 1);
  return new_array;
}

function removeFirstKitten() {
  var new_cat = kittens.slice(1);
  return new_cat;
}
