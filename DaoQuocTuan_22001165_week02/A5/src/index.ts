function simulatedTask(time: number):Promise<string>{
    return new Promise((resolve) =>{
      setTimeout(()=>{
        resolve('Task done')
      }, time);   
    });
}
simulatedTask(3000).then((msg) => console.log(msg))