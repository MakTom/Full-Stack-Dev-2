var compareNumToTen = (num)=>{
    const myPromise = new Promise(function(resolve, reject) {
    if (num > 10) {
      resolve(`${num} is greater than 10, Success!!`);
    } else {
      reject(`${num} is less than 10, Error!!`);
    }
  });
  return myPromise;
}

compareNumToTen(8)
  .then((result) => {
      console.log(result);
      
  }).catch((err) => {
      console.log(err)
  });

  compareNumToTen(15)
  .then((result) => {
      console.log(result);
      
  }).catch((err) => {
      console.log(err)
  });