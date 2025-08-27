
function simulatedTask(time: number):Promise<string>{
    return new Promise((resolve) =>{
      setTimeout(()=>{
        resolve('Task done')
      }, time);   
    });
}

async function runTask() {
  try {
    const result = await simulatedTask(2000);
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}

runTask();
