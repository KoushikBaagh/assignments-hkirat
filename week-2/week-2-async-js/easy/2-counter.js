let counter = 0;
console.log("You are going to start");

function counter2() {
  counter++;
  console.log(counter);
  setTimeout(counter2, 1000);
}

setTimeout(counter2, 1000);
