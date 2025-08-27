function rejectAfter1Sec(): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 1000); 
  });
}

rejectAfter1Sec()
  .then(() => console.log("This will not run"))
  .catch((err) => console.error(err.message));
