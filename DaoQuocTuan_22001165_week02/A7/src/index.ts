function simulateTask(time: number, name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${name} finished in ${time} ms`);
    }, time);
  });
}

Promise.race([
  simulateTask(3000, "Task 1"),
  simulateTask(1500, "Task 2"),
  simulateTask(2000, "Task 3"),
])
  .then((result) => {
    console.log("Fastest:", result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
