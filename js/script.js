console.log('debugging');

var sauceFlag  = 1;

while (sauceFlag === 1) {

 sauceFlag = prompt('Do you need sauce? Please enter yes or no');

  if (sauceFlag === 'yes') {

    var countSauce = parseInt(prompt ('How many sauce?Please enter a number'));
    sauceFlag = 0;


    if  (countSauce > 10) {
      sauceFlag = 1;
      alert("Oh! too many!");
      continue;

    }
  }

  if (sauceFlag === 0) {
     sauceFlag = 0;
  }


}
