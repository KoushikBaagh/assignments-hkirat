/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  while (milliseconds / 1000 != 0) {
    const pr = new Promise(function (resolve, reject) {
      setTimeout(resolve, milliseconds);
    });
    milliseconds / 1000 - 1;
    return pr;
  }
}

module.exports = sleep;
