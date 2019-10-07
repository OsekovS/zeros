module.exports = function zeros(expression) {
  // module.exports = 
  const sec_fact = (num) =>( num === 1 || num === 0) ? 
  1 : num*sec_fact(num-2);
  const countZeros = (num,divider) =>{
    let count=0;
    if(num>=divider){
      while(true){
        let result = Number.parseInt(num/divider)
        divider*=divider
        if(result === 0) break
        count+=result
      }
    }
    return count
  };
  const countZeros2 = (num,divider) =>{
    let a = 1;
    let result=0;
    while(a*divider<=num){
      if(Number.isInteger(a/divider)){
        let counter = 1;
        let numIskaj = a*divider;
        while(numIskaj>=divider){
          result += 1;
          numIskaj/=divider;
        }
        
      }
      else{
      result += 1;}
      a+=2;
    }
    return result
  }

  let accumulator = {countOfFive:0,countOfTwo:0,countOfTen:0}
  expression.split('*').forEach(currentValue => {
    if(currentValue.indexOf('!!')===-1){
      accumulator.countOfFive += countZeros(parseInt(currentValue.split('!')[0]),5)
      accumulator.countOfTwo += countZeros(parseInt(currentValue.split('!')[0]),2)
    }
    else{
      if(parseInt(currentValue.split('!!')[0])%2 === 0){
        accumulator.countOfTwo += countZeros(parseInt(currentValue.split('!!')[0]),2)
        accumulator.countOfTen += countZeros(parseInt(currentValue.split('!!')[0]),10)
        if(parseInt(parseInt(currentValue.split('!!')[0])/50)%2!==0){
        accumulator.countOfFive += parseInt(parseInt(currentValue.split('!!')[0])/50)
        }
        else{
          accumulator.countOfFive += parseInt(parseInt(currentValue.split('!!')[0])/50)/2
        }
      }
      else{
        accumulator.countOfFive += countZeros2(parseInt(currentValue.split('!!')[0]),5)

      }
    }
    
  });
  let result=0;

  if(accumulator.countOfFive<accumulator.countOfTwo-5*accumulator.countOfTen){
    result+=accumulator.countOfFive+accumulator.countOfTen
  }
  else{
    result+=(accumulator.countOfTwo-5*accumulator.countOfTen)+accumulator.countOfTen
  }
  return result

}
