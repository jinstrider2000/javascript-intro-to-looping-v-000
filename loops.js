function maybeTrue() {
  return Math.random() >= 0.5
}

function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    i === 1 ? array.push("I am ${i} strange loop."): array.push("I am ${i} strange loops.")
  }
}

function whileLoop(n) {
  while (n >= 0) {
    console.log(n--)
  }
  return "done"
}

function doWhileLoop(array) {
  do {

  } while (true);
}
