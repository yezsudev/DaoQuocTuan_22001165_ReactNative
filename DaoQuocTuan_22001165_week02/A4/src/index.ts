const randomNumberPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    const num = Math.floor(Math.random() * 10); 
    if (num >= 5) {
      resolve(num); 
    } else {
      reject(new Error(`Number too small: ${num}`)); 
    }
  }, 1000); 
});

randomNumberPromise
  .then((result) => {
    console.log("Random number:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
