function simulatedTask(time: number):Promise<string>{
    return new Promise((resolve) =>{
      setTimeout(()=>{
        resolve('Task done')
      }, time);   
    });
}
Promise.all([
  simulatedTask(1000),
  simulatedTask(2000),
  simulatedTask(3000),]
).then((msg) => {
  console.log(msg)
  console.log('All tasks are done');
})
.catch((err)=>{
  console.log('Error');
})