const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello Async'); 
    reject(new Error('Error'));
  }, 2000);
});

promise.then(msg => console.log(msg)).catch(err => console.error(err.message));
