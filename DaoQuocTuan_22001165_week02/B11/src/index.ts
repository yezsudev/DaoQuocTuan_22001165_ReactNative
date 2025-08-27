
function getNumberAfter1Sec(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

async function runTask() {
  try {
    const result = await getNumberAfter1Sec();
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}

runTask();
