const promise = Promise.resolve(3);

promise
  .then((num) => {
    return num * num;
  })
  .then((num) => {
    return num * 2; 
  })
  .then((num) => {
    return num + 5;
  })
  .then((result) => {
    console.log("result:", result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
