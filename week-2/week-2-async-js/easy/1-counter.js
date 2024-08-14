let counter = 0;

function increment() {
  setInterval(() => {
    console.log(counter);
    counter++;
  }, 1000);
}

increment();
