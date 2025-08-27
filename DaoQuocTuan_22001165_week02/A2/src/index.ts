function getNumberAfter1Sec(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

getNumberAfter1Sec().then((num) => console.log(num));
