const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1);
    reject(new Error('Error message'));
  }, 2000)
  // reject('Error');
})

p.then(res => console.log(`Result ${res}`))
  .catch(error => console.log(error.message));
