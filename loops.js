
function forLoop(array){
  for (let i=0;i<25;i++){
    array.push("I am ${i} strange loops.")
  }
  return array
}



function whileLoop(num){
  while (num>0) {
    console.log(num);
    num--
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
      array.push("I am ${i} strange loops.")

  } while (array.length > 0 && maybeTrue());
  return array
}
