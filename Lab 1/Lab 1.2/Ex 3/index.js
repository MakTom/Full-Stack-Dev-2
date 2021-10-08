const promise1 = 101;
const promise2 = "Follow the whites";

const promise3 = new Promise((resolve, reject) => {
  resolve("rabit ... neo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});