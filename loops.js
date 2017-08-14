/*This is the first test*/
function forLoop(array) {

  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array.push("I am 1 strange loop.")


    }
    else {
      array.push(`I am ${i} strange loops.`)


    }


  }
  return array
}

/*This is the second test*/
function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"

}
/*This is the third test*/
function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop()

  }
  while (array.length > 0 && maybeTrue());
  return array
  
}
