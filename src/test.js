const arr = [1,2,3,4,5,6,7];

setInterval(function () {
  const flag = Math.floor(Math.random()*7);
  if (flag > 4) {
    console.log(arr.slice(flag, 7).concat(arr.slice(0, flag-4)))
  } else {
    console.log(arr.slice(flag, flag + 3))
  }
}, 500)
