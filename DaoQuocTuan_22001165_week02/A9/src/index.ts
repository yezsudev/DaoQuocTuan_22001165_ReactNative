const filterEvenNumbers = new Promise<number[]>((resolve) => {
  setTimeout(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evens = arr.filter((num) => num % 2 === 0);
    resolve(evens);
  }, 1000);
});

filterEvenNumbers
  .then((result) => {
    console.log("Even numbers:", result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
