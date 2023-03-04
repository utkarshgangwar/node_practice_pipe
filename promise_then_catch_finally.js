function asyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve(randomNumber);
        } else {
          reject(new Error('Failed to generate random number'));
        }
      }, 1000);
    });
  }
  
  asyncFunction()
    .then(result => {
      console.log(`The result is ${result}`);
    })
    .catch(error => {
      console.log(`An error occurred: ${error.message}`);
    })
    .finally(() => {
      console.log('This code will always run, regardless of whether the promise was resolved or rejected');
    });
  