function forLoop(array) {
  for(var i = 0; i < array.length;i++) {
    if(i === 1) {
      array[i] = "I am 1 strange loop."
    } else {
      array[i] = `I am ${i} strange loops.`
    }
  }
  if(array.length !== array.length+25) {
    for(var l = array.length; l < array.length+25;l++) {
      array[l] = `I am ${i} strange loops.`
    }
  }

  return array
}



function whileLoop(n) {

  while (n > 0) {
    console.log(n)
    n--
  }
  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while (array.length > 0 || maybeTrue());
  return array
}
