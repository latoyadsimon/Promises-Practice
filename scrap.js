const myPromise = new Promise((resolve, reject) => {
  reject("rejected");
  resolve("resolved");
});

myPromise
  .then((data) => {
    console.log("then: ");
    console.log(data);
  })
  .catch((error) => {
    console.log("The error is:");
    console.log(error);
  });

// This present can either give you what you want
// or it will explode
