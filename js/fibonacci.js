const fibonacci = (num) => {
    let num1=0;
    let num2=1;
    let sum=0;
    
      for(i=0;i<num;i++){
        sum = num1 +num2;
        num1 = num2;
        num2 = sum;
      }
      return num1      
}

module.exports = {fibonacci}
