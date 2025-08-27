"use strict";
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello');
        reject(new Error('Error'));
    }, 2000);
});
