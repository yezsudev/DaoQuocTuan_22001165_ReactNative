const randomPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    const num = Math.floor(Math.random() * 10);
    if (num >= 5) {
      resolve(num);
    } else {
      reject(new Error(`Number too small: ${num}`)); 
    }
  }, 1000);
});

randomPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  })
  .finally(() => {
    console.log("Done");
  });
